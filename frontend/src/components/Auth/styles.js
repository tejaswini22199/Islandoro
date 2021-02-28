import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    background:'linear-gradient(136.16deg, rgba(255, 255, 255, 0.4) 7.51%, rgba(255, 255, 255, 0) 91.93%)',
    // background: 'linear-gradient(136.16, rgba(255, 255, 255, 0.4) 7.51%, rgba(255, 255, 255, 0) 91.93%)',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
  width:'330',
  marginleft:'320',
  padding:'10',
  background: 'linear-gradient(136.16, rgba(255, 255, 255, 0.4) 7.51%, rgba(255, 255, 255, 0) 91.93%)',
  borderRadius: '24',
    // width: '100%', // Fix IE 11 issue.
   marginTop: theme.spacing(3),
  },
  
  submit: {
    margin: theme.spacing(3, 0, 2),
    width:'230',
    height:'40',
    border:'2',
    borderRadius:'10',
    fontSize:'17',
   backgroundColor:'#FB96A3',
   borderBottom:'3px solid #616A6B',
   color:'white',
   fontWeight:'bold'
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
}));