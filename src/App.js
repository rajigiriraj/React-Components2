import './App.css';
import Video from './container1/Video';
import Files from './container1/Files';
import Mark from './container2/Mark';
import Book from './container2/Book';
import Weather from './container4/Weather';
import Home from './container4/Home';
import Toggle from './container4/Toggle';
import FourComponents from './container2/FourComponents';
import MugDress from './container4/MugDress';
import AddCard from './container4/AddCard';
import CommonButton from './CommonContainers/CommonButton';
import IconButton from './CommonContainers/IconButton';
import Searchbar from './container2/Searchbar';
import Filter from './container3/Filter';
import Ratings from './container4/Ratings';
import { FaFolderMinus } from "react-icons/fa6";
import { RiWallet3Fill } from "react-icons/ri";
import { BiSolidBell } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { IoChevronBackOutline } from "react-icons/io5";
import { BsHandbagFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

import { FcBusinesswoman } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { IoIosHeartHalf } from "react-icons/io";
import { FaCommentDots } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { IoCaretForwardOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";



import character1 from './assets/character1.png';
import alex from './assets/alex.png';
import pizza from './assets/pizza.png';
import coffee from './assets/coffee.png';
import dress from './assets/dress.png';

import mug from './assets/mug.png';

const files=[
  {
    fileName:'design.ps',
    value:'50',
    percentage:'50%'
  },
  {
    fileName:'resume.docx',
    value:'32',
    percentage:'32%'
  },
  {
    fileName:'message.docx',
    value:'21',
    percentage:'21%'
  }
]
const notifications=[
  {
    image:<FcBusinesswoman size={40}/>,
    heading:'Anna',
    icon:<IoIosHeartHalf size={12}/>,
    text:'Liked your photo',
    color:'rgb(189, 14, 101)'
  },
  {
    image:<FcBusinessman size={40}/>,
    heading:'Tom',
    icon:<FaCommentDots  size={14}/>,
    text:'Commented',
    color:'rgb(38, 44, 111)'
  },
  {
    image:<FcBusinesswoman size={40}/>,
    heading:'Amy',
    icon:<IoIosContact size={14}/>,
    text:'Wants to be friends',
    color:'rgb(189, 101, 14)'
  }
];
const colors=[
  {
    color:'black',
    border:'solid 1px white'
  },
  {
    color:'red',
    border:'none'
  },
  {
    color:'orange',
    border:'none'
  },
  {
    color:'yellow',
    border:'none'
  },
  {
    color:'green',
    border:'none'
  },
  {
    color:'skyblue',
    border:'none'
  },
  {
    color:'blue',
    border:'none'
  }
];
const materials=[
  {
  name:'cotton',
  border: 'solid 1px rgb(107, 14, 228)'
  },
  {
    name:'Linen',
    border: 'solid 1px rgb(137, 135, 135)'
  },
  {
    name:'Poliester',
    border: 'solid 1px rgb(135, 135, 135)'
  }
]
const ratings=[5,4,3,2,1];

function App() {
  return (
    <div className='App'>
        <div className="whole-container">
          <div className='container1'>
            <Video/>
            <Files folder_icon={<FaFolderMinus size={20}/>} title={'Files'} classname='file-component' heightmea="200px" widthmea="150px" files={files}/>
            <Files folder_icon={<RiWallet3Fill size={20}/>} title={'New Payment Method'} classname='payment-component'  heightmea="250px" widthmea="150px" btn={<CommonButton text='Continue' width={200}/>}/>
          </div>
          <div className='container2'>
            <FourComponents img={character1} h5='FIND MY WAY' p='DaBaby' icon1={<IoCaretForwardOutline size={20}/>}/>
            <FourComponents img={alex} h5='Alex Traier' p='Friend request' classname='alex' icon2={<ImCross size={12}/>} icon3={<TiTick size={16}/>}/>

            <Mark margin={20} classname='withFollows' height='180px' width='150px' imgHeight='70px' imgWidth='70px' borderRadius='50px' margintop='20px'/>
            <Book/>
            <Files folder_icon={<BiSolidBell  size={20}/>} title={'Notification'} classname='notification-component'  heightmea="250px" widthmea="150px" notifications={notifications}/>
            <Searchbar text='Search anything...'/>
          </div>
          <div className='container3'>
            <FourComponents img={pizza} h5="Papa's" p='3.2km' classname='pizza' floatingicon1={<FaCommentDots  size={14}/>} floatingicon2={<IoIosHeartHalf size={12}/>}/>
            <FourComponents img={coffee} h5='Coffee mug' p='Beautiful and durable' text={'$7.9'}/>
            <Mark height='230px' width='180px' imgHeight='180px' imgWidth='180px' borderRadius='20px' classname2='mark2'/>
            <Filter topic='Filter' title1='Price' subtitle1='$50-$125' title2='Colors' title3='Material' colors={colors} materials={materials}/>
            <div style={{display:'flex'}}>
              <div style={{marginTop:'60px',marginLeft:'-30px'}}>
                <IconButton icon={<IoChevronBackOutline size={20} />} height={45} width={45} borderRadius={25} roundMargin={20}/>
                <IconButton icon={<IoIosArrowForward size={20}/>} height={45} width={45} borderRadius={25} roundMargin={20}/>
              </div>
              <MugDress width='160px' img={dress} imgheight='130px' imgwidth='160px' h5='New collection' h6='Summer outfits' font1clr='rgb(45, 19, 80)' font2clr='white' font1size='10px' font2size='14px' align='center' btn={<IconButton icon={<IoIosArrowForward />} height={35} width={35} borderRadius={10}/>}/>
            </div>

          </div> 
          <div className='container4'>
            <Weather/>
            <CommonButton text={'Button text'} width={100}/>
            <CommonButton text={'Button text'} width={200} margin={-100}/>
            <div style={{display:'flex'}}>
              <Toggle/>
              <Ratings title='4.4' icon={<FaStar />} text='32 reviews' ratings={ratings}/>
            </div>
            <Home/>
            <AddCard title='Add a new card' btn={<CommonButton text={'Sav'} width='200px'/>} placeholder1='Card number...' placeholder2='Owner name' placeholder3='Exp.date' placeholder4='CVC'/>
            <MugDress width='130px' img={mug} imgheight='120px' imgwidth='130px' h5='Coffee mug' h6='Summer outfits' font1clr='white' font2clr='rgb(141, 139, 139)' font1size='14px' font2size='10px' price='$7.9' btn={<IconButton icon={<BsHandbagFill />} height={35} width={35} borderRadius={10}/>}/>
          </div>
        </div>
    </div>
    
  );
}

export default App;
