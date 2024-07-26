import "./EmotionItem.css";
import { getEmotionImages } from "../util/get-emotion-image";

export default function EmotionItem({
  emotionId,
  emotionName,
  isSelected,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ""
      }`}
    >
      <img src={getEmotionImages(emotionId)} className="emotion_img" />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
}
