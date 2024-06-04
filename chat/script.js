document.getElementById('send-btn').addEventListener('click', function() {
    var inputBox = document.getElementById('input-box');
    var chatLogs = document.getElementById('chatlogs');
    var userMessage = inputBox.value.toLowerCase();
    var botResponse = "";
  
    if(userMessage) {
      chatLogs.innerHTML += '<p>' + inputBox.value + '</p>';
      inputBox.value = '';
  
      // Chatbot responses based on keywords
      if(userMessage.includes('hello') || userMessage.includes('hi')) {
        botResponse = "Hello! ";
      } else if(userMessage.includes('how are you')) {
        botResponse = "I'm well thanks for asking!";
      } else if(userMessage.includes('thanks') || userMessage.includes('thank you')) {
        botResponse = "You're welcome! If you have any more questions, feel free to ask.";
      } else if(userMessage.includes('bye') || userMessage.includes('goodbye')) {
        botResponse = "Goodbye! Have a great day!";
      } else if(userMessage.includes('help')) {
        botResponse = "Sure, I can help. What do you need assistance with?";
      } else if(userMessage.includes('weather')) {
        botResponse = "To check the weather, you can use weather websites or apps like AccuWeather or The Weather Channel.";
      } else if(userMessage.includes('time')) {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // Handle midnight
        minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero for minutes less than 10
        botResponse = "The current time is " + hours + ":" + minutes + " " + ampm + ".";
      } else if(userMessage.includes('news')) {
        botResponse = "Here are some top news headlines: [Insert a few brief news headlines here]";
      } else if(userMessage.includes('joke')) {
        botResponse = "Why don't scientists trust atoms? Because they make up everything!";
      } else if(userMessage.includes('sports')) {
        botResponse = "Here are some recent sports updates: [Insert a few brief sports updates here]";
      } else if(userMessage.includes('movies')) {
        botResponse = "Here are some popular movies currently in theaters: [Insert a few movie titles here]";
      } else if(userMessage.includes('music')) {
        botResponse = "Here are some popular music artists and albums: [Insert a few artist/album names here]";
      } else if(userMessage.includes('books')) {
        botResponse = "Here are some popular books and authors: [Insert a few book/author names here]";
      } else if(userMessage.includes('travel')) {
        botResponse = "For travel information and tips, I recommend checking websites like TripAdvisor or Lonely Planet.";
      } else if(userMessage.includes('food') || userMessage.includes('restaurant')) {
        botResponse = "For restaurant recommendations and food information, you can check websites like Yelp or FourSquare.";
      } else if(userMessage.includes('boss') || userMessage.includes('Owner') || userMessage.includes('Creator')) {
          botResponse = "My Owner, Creator and Boss is ByteBlitz Technologies ";
      } if (userMessage.includes('food') || userMessage.includes('restaurant')) {
        botResponse = "For restaurant recommendations and food information, you can check websites like Yelp or FourSquare.";
      } else if (userMessage.includes('boss') || userMessage.includes('Owner') || userMessage.includes('Creator')) {
        botResponse = "My Owner, Creator and Boss is ByteBlitz Technologies";
      } else if (userMessage.includes('hello') || userMessage.includes('hi')) {
        botResponse = "Hello! I'm happy to help. How can I assist you today?";
      } else if (userMessage.includes('help')) {
        botResponse = "I'm here to help answer any questions you may have. What's on your mind?";
      } else if (userMessage.includes('thanks') || userMessage.includes('thank you')) {
        botResponse = "You're welcome! It was my pleasure to assist you.";
      } else if (userMessage.includes('what can you do')) {
        botResponse = "I can assist with a wide range of tasks, from answering questions to generating text. Let me know how I can help!";
      } else if (userMessage.includes('who made you')) {
        botResponse = "My creators are a team of developers at ByteBlitz Technologies.";
      } else if (userMessage.includes('how are you')) {
        botResponse = "I'm doing well, thanks for asking! I'm always happy to chat and assist with any questions you may have.";
      } else if (userMessage.includes('unknown')) {
        botResponse = "I'm not able to understand that request. Can you please try again?";
      }
      else {
        botResponse = "I'm sorry, I didn't understand that. Could you please rephrase?";
      }
  
      chatLogs.innerHTML += '<p><em>Chatbot: ' + botResponse + '</em></p>';
    }
    chatLogs.scrollTop = chatLogs.scrollHeight;
  });