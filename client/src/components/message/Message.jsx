import './message.css'
import {format} from "timeago.js"


export const Message = ({message,own}) => {
  return (
    <div className={own ? "message own":"message"}>
         <div className='messageTop'>
            <img
            className='messageImg'
            src = "https://images.pexels.com/photos/706335/pexels-photo-706335.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            /> 
            <p className='messageText'>{message.text}.</p>
         </div>
         <div className='messageBottom'>{format(message.createdAt)}</div>

        </div>
  );
}
export default Message;

