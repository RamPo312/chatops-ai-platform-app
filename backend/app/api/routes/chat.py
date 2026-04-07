from fastapi import APIRouter
from app.schemas.chat import ChatRequest, ChatResponse
from app.services.chatbot_service import ChatbotService

router = APIRouter(prefix="/chat", tags=["Chat"])


@router.post("", response_model=ChatResponse)
def chat(request: ChatRequest) -> ChatResponse:
    reply = ChatbotService.get_reply(request.message)
    return ChatResponse(reply=reply)
