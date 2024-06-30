import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Task } from '../../models/Task';
import { FC } from 'react';

interface IProps{
  task: Task
}

const TaskItem: FC<IProps> = ({task}) => {
  return (
    <Box sx={{ minWidth: 275, width: "100%", mb: 1}}>
      <Card variant="outlined">
      <CardContent>
      <Typography variant="h5" component="div">
        {task.name}
      </Typography>
      <Typography variant="body2">
        {task.description}
      </Typography>
      </CardContent>
      </Card>
    </Box>
  );
}

export default TaskItem
