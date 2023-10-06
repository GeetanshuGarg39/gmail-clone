import Email from "../model/email.js";


export const saveSentEmail = (request,response) => {
    try{
        const email = new Email(request.body);
        email.save();

        response.status(200).json("Email saved successfully");
    }catch(error){
        response.status(500).json(error.message);
    }
}

export const getEmails = async(request,response) => {
    try{
        let emails;
        if(request.params.type){
            emails = await Email.find({type:request.params.type})
        }

        return response.status(200).json(emails);
    }catch(error){
        console.log(error);
        response.status(500).json(error.message);
    }
}