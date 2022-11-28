import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function QuestionDetail() {
    const [params] = useState(useParams());
    const [question, setQuestion] = useState();
    const [answerList, setAnswerList] = useState([])

    useEffect(() => {
        console.log(params.id);
        axios
            .get(
                `https://meercat-question-box.onrender.com/api/questions/${params.id}/`
            )
            .then((res) => {
               //  console.log(res.data);
                setQuestion(res.data);
            });
         axios.get(`https://meercat-question-box.onrender.com/api/questions/${params.id}/answers/`).then((res)=>{
            console.log(res.data)
            setAnswerList(res.data)

         })
    }, []);

    return (
        <>
            <h1>Question Detail</h1>
            {question && (
                <>
                    <Card sx={{ m: 1.5 }} key={question.pk}>
                        <CardContent>
                            <Typography variant="h5" sx={{ mb: 1 }}>
                                {question.title}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1.5 }}>
                                {question.question}
                            </Typography>
                            <Typography variant="body2">
                                Posted by: {question.user}
                            </Typography>
                            <Typography>{question.createdDate}</Typography>
                        </CardContent>
                    </Card>
                    <Box sx={{ml:6}} >
                        {answerList &&
                            answerList.map((answer) => (
                              <Card>
                              <CardContent>
                                 <Typography>{answer.answer}</Typography>
                                 <Typography>Answered by: {answer.user}</Typography>
                              </CardContent>
                              </Card>
                            ))}
                    </Box>
                </>
            )}
        </>
    );
}
