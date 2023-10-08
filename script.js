const Quotes ={

    motivations: [
        "You are capable of great things.",
        "Success is a journey, not a destination.",
        "Believe in yourself and your abilities.",
        "Hard work pays off.",
        "Keep going, even when it's tough."],
        affirmations: [
            "You are amazing just as you are.",
            "You radiate positivity and confidence.",
            "You are worthy of love and success.",
            "You attract success and prosperity.",
            "You have the power to achieve your dreams.",
          ],
          actions: [
            "Take a step toward your goals today.",
            "Spread kindness wherever you go.",
            "Challenge yourself to learn something new.",
            "Set meaningful intentions for the day.",
            "Help someone in need; it's a gift to both of you.",
          ]
 }
function randommessage(components){
    let message ="";
    for(component in components){
        if(components.hasOwnProperty(component)){
            const componentArray = components[component];
            const componentIndex = Math.floor(Math.random() * componentArray.length);
            const componentMessage = componentArray[componentIndex];
        switch(component){
            case "motivations":
                message += `motivation: ${componentMessage}`;
                break;
            case "affirmations":
                message += `affirmation: ${componentMessage}`;
                break;
            case "actions":
                message +=`action: ${componentMessage}` 
                break;
            default:
                break;    
         }   
        }
    }  
    return message.trim();  
} 

const QuoteOfDay = randommessage(Quotes);
console.log(QuoteOfDay); 
