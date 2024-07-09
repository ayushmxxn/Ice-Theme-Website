import Hero from '@/components/Hero'
import Theme from '../components/Theme'
import RL1 from '../images/RL1.png';
import RL2 from '../images/RL2.png';
import RL3 from '../images/RL3.jpg';
import RL4 from '../images/RL4.png';
import RL5 from '../images/RL5.webp';
import RL6 from '../images/RL6.png';
import RL7 from '../images/RL7.png';
import RL8 from '../images/RL8.png';
import RL9 from '../images/RL9.png';
import Footer from '@/components/Footer'
import Review from "@/components/Reviews";
import UserReview from '@/components/UserReview';


 const testimonials = [
{
    image: RL1,
    text: 'Nice, this is gonna be my new default theme for the next few months. Hits a good mark of being visually interesting while also not being eye-slaughter to look at for long periods of time. Thanks for sharing. edit: checked it out in a few different projects now and just want to emphasize: SO fucking clean. love this shit.',
    name: 'Psychological-Tax801',
    social: 'https://www.reddit.com/r/csMajors/comments/1bv7f2o/comment/kxzghr2/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button'
  },
  {
    image: RL2,
    text: 'Amazing job - the more I look at this theme, the better it feels. Wow!. This theme for me is already on part with the likes of OneDark, Seti, Retreon and Agila. Overall, the color schemes and tokenization for Bash, JavaScript, JSON, YAML/Ansible, and Vue files are awesome - the background color is nice too.',
    name: 'black_anarchy',
    social: 'https://www.reddit.com/r/vscode/comments/1bqr1oy/comment/kxjcojk/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button'
  },
  {
    image: RL6,
    text: 'Thank you, I love tokyo night but only thing annoying was git diffs and terminal autocompletion were little pale to me. But this theme looks like the one i need. 🫡',
    name: 'wolf_codes',
    social: 'https://www.reddit.com/r/vscode/comments/1bqr1oy/comment/l3kodsg/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button'
  },
  {
    image: RL4,
    text: 'Nice theme, installed and using it now. I love it. thank you',
    name: 'Dt-dave',
    social: 'https://www.reddit.com/r/vscode/comments/1bqr1oy/comment/kxirken/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button'
  },
  {
    image: RL5,
    text: 'I think the first one is the best. These really are very nice themes and they\'re very pleasing to the eyes.',
    name: 'Suspect4pe',
    social: 'https://www.reddit.com/r/vscode/comments/1bqr1oy/comment/kx4qx95/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button'
  },
   {
    image: RL3,
    text: 'Nice!! I love the first one. Reminds me of Dracula theme but with added colours and details. Good job!',
    name: 'pasanflo',
    social: 'https://www.reddit.com/r/vscode/comments/1bqr1oy/comment/kx599k0/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button'
  },
  {
    image: RL7,
    text: 'Second is now my ❤️',
    name: 'fewytv',
    social: 'https://www.reddit.com/r/vscode/comments/1bqr1oy/comment/kxa0kdl/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button'
  },
  {
    image: RL8,
    text: 'mix of tokyo night and nord, i love it!',
    name: 'CarbonGrated',
    social: 'https://www.reddit.com/r/developersIndia/comments/1bv7xkg/comment/kxz3bbx/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button'
  },
  {
    image: RL9,
    text: 'I like the first one, purple is really good to my eye.',
    name: 'misterjyt',
    social: 'https://www.reddit.com/r/vscode/comments/1bqr1oy/comment/kx8jfz4/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button'
  }
];


function Home() {

  return (
    <div className='text-center'>
      <Hero/>
      <Theme/>
      <div className='flex justify-center'>
        <Review mode='dark' testimonials={testimonials}/>
      </div>
      <UserReview/>
      <Footer/>
    </div>
  )
}

export default Home;