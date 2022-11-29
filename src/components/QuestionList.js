import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

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
                    <Card sx={{ m: 1.5 }} key={question.pk}>
                        <CardContent>
                            <Typography variant="h5" sx={{ mb: 1 }}>
                                {question.title}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1.5 }}>
                                {question.question}
                            </Typography>
                            <Link to={`Question/${question.pk}`} >
                                <Button
                                    variant="outlined"
                                    onClick={() => {
                                        console.log(`card clicked: ${question.pk}`);
                                    }}
                                >
                                    {" "}
                                    More (will take to detail page)
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
        </>
    );
}
