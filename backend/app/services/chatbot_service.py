class ChatbotService:
    @staticmethod
    def get_reply(user_message: str) -> str:
        """
        Temporary starter logic.
        Later we can replace this with OpenAI or another LLM integration.
        """
        return f"Bot reply: You said -> {user_message}"
