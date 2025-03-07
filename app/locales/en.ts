const en = {
  Chat: {
    SubTitle: (count: number) => `${count} messages`,
    Actions: {
      ChatList: "Go To Chat List",
      Copy: "Copy",
      Delete: "Delete",
    },
    InputActions: {
      Stop: "Stop generating",
      Clear: "Clear Context",
    },
    Thinking: "Thinking…",
    InputMobile: "Enter to send",
    Input:
      "Enter to send, Shift + Enter to wrap, enter URLs to add a PDF or HTML document to the context",
    Send: "Send",
    IsContext: "Contextual Prompt",
    LoadingURL: "Loading content...",
    LLMError:
      "There was an error calling the OpenAI API. Please try again later.",
  },
  Upload: {
    Invalid: (acceptTypes: string) =>
      `Invalid file type. Please select a file with one of these formats: ${acceptTypes}`,
    SizeExceeded: (limitSize: number) =>
      `File size exceeded. Limit is ${limitSize} MB`,
    Failed: (e: string) => `Error uploading file: ${e}`,
    ParseDataURLFailed: "Unable to read file: Please check if it's encrypted.",
    UnknownFileType: "Unknown file type",
    ModelDoesNotSupportImages: (acceptTypes: string) =>
      `Image upload is not supported for this model. Upload one of the supported types instead: ${acceptTypes}`,
  },
  Export: {
    Image: {
      Modal: "Long press or right click to save image",
    },
  },
  Memory: {
    Title: "Memory Prompt",
    Send: "Send Memory",
  },
  Home: {
    Github: "Github",
    Logout: "Logout",
    Settings: "Settings",
  },
  Settings: {
    Title: "Settings",
    SubTitle: "All Settings",
    Danger: {
      Clear: {
        Title: "Clear All Data",
        SubTitle: "Reset all bots and clear all messages",
        Action: "Clear",
        Confirm: "Confirm to clear all data?",
      },
    },

    Model: "Model",
    Temperature: {
      Title: "Temperature",
      SubTitle: "A larger value makes the more random output",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Do not alter this value together with temperature",
    },
    MaxTokens: {
      Title: "Max Tokens",
      SubTitle: "Maximum length of input tokens and generated tokens",
    },
    Backup: {
      Download: {
        Title: "Backup Bots",
        SutTitle: "Download the state of your bots to a JSON file",
      },
      Upload: {
        Title: "Restore Bots",
        SutTitle: "Upload the state of your bots from a JSON file",
        Success: "Successfully restored the bots from the JSON file",
        Failed: (e: string) => `Error importing the JSON file: ${e}`,
      },
    },
  },
  Store: {
    DefaultBotName: "New GPT",
    BotHello: "孩子家长，今天有什么能帮到您?",
  },
  Copy: {
    Success: "Copied to clipboard",
    Failed: "Copy failed, please grant permission to access clipboard",
  },
  Context: {
    Add: "Add a Prompt",
    Clear: "Context Cleared",
    Revert: "Revert",
    Title: "Context Prompt Settings",
  },
  Share: {
    Title: "Share Bot",
    Url: {
      Title: "URL",
      Hint: "Use the URL to share your bot. The URL will be valid for 30 days.",
      Error: "Oops, something went wrong. Please try again later.",
    },
  },
  Bot: {
    Name: "GPT",
    Page: {
      Search: (count: number) => `Search Bot - ${count} GPTs`,
      Create: "Create GPT",
    },
    Item: {
      Edit: "Edit",
      Delete: "Delete",
      DeleteConfirm: "Confirm to delete?",
      Share: "Share",
    },
    EditModal: {
      Title: `Edit GPT`,
      Clone: "Clone",
    },
    Config: {
      Avatar: "GPT Avatar",
      Name: "GPT Name",
      HideContext: {
        Title: "Hide Context Prompts",
        SubTitle: "Do not show in-context prompts in chat",
      },
      BotHello: {
        Title: "Welcome Message",
        SubTitle: "Welcome message sent when starting a new chat",
      },
      Title: "Bot Settings",
    },
  },

  Welcome: {
    Title: "神兽GPT",
    SubTitle: "AI伴宝宝长大",
    Quote: "“建立宝宝的健康档案，为宝宝量身定制的AI健康卫士.”",
    LoginLinkedinTitle: "Login with LinkedIn",
  },
};

export type LocaleType = typeof en;

export default en;
