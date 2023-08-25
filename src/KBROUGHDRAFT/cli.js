const { stdin, stdout } = process;

// Knowledge base data structure
const knowledgeBase = [
  {
    keywords: ['App issues', 'Laptop issues'],
    response: 'Are you onsite?',
    followUp: [
      {
        keyword: 'Yes',
        response: 'Step 1: Login to the DVR/NVR.\n' + 'Step 2: Deez Nuts\n'
      },
      {
        keyword: 'No',
        response: 'If possible, try connecting to a stable network and see if that resolves the issue.'
      }
    ]
  },
  {
    keywords: ['Physical Damage'],
    response: 'If your product has physical damage or issues, please contact our support team for assistance.'
  },
  {
    keywords: ['Connection Issues'],
    response: 'If your product has physical damage or issues, please contact our support team for assistance.'
  },
  {
    keywords: ['Unsure of issue'],
    response: 'If your product has physical damage or issues, please contact our support team for assistance.'
  },
  // Add more commands and responses here
];

// State variable to track conversation flow
let conversationState = 'default'; // Can be 'default', 'askFollowUp', etc.
let currentEntry = null; // Store the current entry for follow-up

function displayWelcomeMessage() {
  console.log('Welcome to the Knowledge Base');
  console.log('Type one of the commands listed below to get started');
  knowledgeBase.forEach(entry => {
    console.log(`- ${entry.keywords.join(' / ')}`);
  });
}

// Call the welcome message function
displayWelcomeMessage();

// Start waiting for user input
stdout.write('Enter a command: ');

// Listen for user input
stdin.on('data', (data) => {
  const input = data.toString().trim();

  if (input === 'exit') {
    console.log('Exiting...');
    process.exit();
  } else {
    if (conversationState === 'default') {
      const matchedEntry = knowledgeBase.find(entry => entry.keywords.some(keyword => input.includes(keyword)));

      if (matchedEntry) {
        console.log(matchedEntry.response);
        if (matchedEntry.followUp) {
          conversationState = 'askFollowUp';
          currentEntry = matchedEntry; // Store the matched entry for follow-up
          stdout.write(`Respond with one of: ${matchedEntry.followUp.map(f => f.keyword).join(' / ')}\n`);
        }
      } else {
        console.log('Sorry, I don\'t understand that command. Please try again.');
      }
    } else if (conversationState === 'askFollowUp') {
      const followUpMatch = currentEntry.followUp.find(followUpEntry =>
        followUpEntry.keyword.toLowerCase() === input.toLowerCase()
      );

      if (followUpMatch) {
        console.log(followUpMatch.response);
      } else {
        console.log('Sorry, I don\'t understand your response. Please try again.');
      }

      // Reset the conversation state and the stored entry
      conversationState = 'default';
      currentEntry = null;
      stdout.write('Enter a command: ');
    }
  }
});
