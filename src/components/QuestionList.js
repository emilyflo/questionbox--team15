import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function QuestionList() {
    const [allQuestions, setAllQuestions] = useState();

    useEffect(() => {
        axios
            .get("https://meercat-question-box.onrender.com/	api/questions/", {})
            .then((res) => {
                console.log(res.data);
                setAllQuestions(res.data);
            });
    }, []);

    return (
        <>
            <h1>QuestionList</h1>
            {allQuestions &&
                allQuestions.map((question) => (
                    <Card sx={{m:1.5}} >
                        <CardContent>
                            <Typography>{question.title}</Typography>
                            <Typography>{question.question}</Typography>
                        </CardContent>
                    </Card>
                ))}
        </>
    );
}
