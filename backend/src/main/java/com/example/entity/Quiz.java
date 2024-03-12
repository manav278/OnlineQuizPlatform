package com.example.entity;
import jakarta.persistence.*;
@Entity
@Table(name="quiz")
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int quiz_id;
    private String quiztitle;
    public Quiz(){
    }
    public String getQuiztitle() {
        return quiztitle;
    }
    public void setQuiztitle(String quiztitle) {
        this.quiztitle = quiztitle;
    }
    public int getQuiz_id() {
        return quiz_id;
    }

    public void setQuiz_id(int quiz_id) {
        this.quiz_id = quiz_id;
    }
    public Quiz(String quiztitle)
    {
        this.quiztitle=quiztitle;
    }
}
