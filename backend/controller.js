import axios from 'axios'
import Project from './models/projects.js';
import Message from './models/messages.js';

export async function sendMessage(req,res){
    try{
        console.log('Sending message...');
        const {name, email, message} = req.body;

        const msg = await Message.create({name, email, message})

        res.json({message: "Message sent successfully", data: msg});
    } catch(error){
        console.error("Error in sendMessage:", error);
        res.status(500).json({error: "internal server error"});
    }
}

export async function saveProjects(req,res){
    try{
        console.log('Fetching projects...');
        const response = await axios('https://api.github.com/user/repos', {
            headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3.raw",

      }
    })

    const readmes = await Promise.all(
      response.data.map(async (project) => {
        try {
          const res = await axios(`${project.url}/readme`, {
            headers: {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            //   Accept: "application/vnd.github.v3.raw",
            },
          });
          
          const decoded = new TextDecoder().decode(
          Uint8Array.from(atob(res.data.content), c => c.charCodeAt(0))
        );
        return decoded;
        } catch (err) {
          console.error("Error fetching README:", err);
          return "No readme available";
        }
      })
      
    );
    for(let i = 0; i < response.data.length; i++){
        const project = response.data[i];
        const readme = readmes[i];

        await Project.findOneAndUpdate(
            {id: project.id},
            {id: project.id,
                name: project.name,
                readMe: readme,
                link: project.html_url,
                imageUrl: project.owner.avatar_url || null
            },
            {upsert: true, new: true}
        )
    }
    res.json({projects: response.data, readmes: readmes});
    } catch(err){
        console.error(err)
        res.status(500).json({error: "internal server error"})
    }
}

export async function getProjects(req, res){
    try{
        const projects = await Project.find({});
        res.json({projects});
    }catch(err){
        console.error(err)
        res.status(500).json({error: "internal server error"})
    }

}