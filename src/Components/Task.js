import React from 'react';

import Paper from '@material-ui/core/Paper';

import {withStyles} from '@material-ui/core/styles'

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import Delete from '@material-ui/icons/Delete';
import Done from '@material-ui/icons/Done';

const styles = ({
    paper:{
        display:'flex',
        justifyContent:'center',
        padding:'15px 0',
        width:'60%',
        margin:'auto'
    }
})

function Task(props){
    const {content, deleteTask, isComplete, completeTask} = props;

    return(
        <Paper className={props.classes.paper}>

            {isComplete ? <Typography variant='h3' style={{textDecoration:'line-through'}}>{content}</Typography> : <Typography variant='h3'>{content}</Typography>}

            <div>
                <Tooltip title='Delete'>
                    <IconButton onClick={deleteTask} color='secondary'><Delete /></IconButton>
                </Tooltip>

                <Button onClick={completeTask} color='primary' variant='contained'>Complete <Done /></Button>
            </div>

        </Paper>
    )
}

export default withStyles(styles)(Task);