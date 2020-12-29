import React, {useState} from 'react';
import {FormErrors} from  './FormErrors';
import {Question} from '../requests';

const NewQuestionForm=(props)=>{
    const [errors,setErrors]=useState({});

    const handleSubmit =(event)=>{
        event.preventDefault();
        const formData=new FormData(event.currentTarget);
        const params={
            title: formData.get('title'),
            body: formData.get('body')
        };
        Question.create(params)
        .then(
            (question)=>{
                if(question.errors){
                console.log('Question Errors:', question.errors)
                setErrors(question.errors)
            }
            if(question.id){
                const id=question.id;
                props.history.push(`/questions/${id}`)

            }
            }
        )
    }


    return(
        <form className='question-form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='title'>Title</label>
            <br />
            <FormErrors errors={errors} forField='title' />
            <input name='title' id='title' />
          </div>
          <div>
            <label htmlFor='body'>Body</label>
            <br />
            <FormErrors errors={errors} forField='body' />
            <textarea name='body' is='body' cols='60' rows='5'/>
          </div>
          <div>
            <input type='submit' value='Submit'/>
          </div>
        </form>
      );
}

export default NewQuestionForm;