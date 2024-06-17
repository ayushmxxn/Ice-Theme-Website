'use client'
import { useRef, useEffect } from 'react';
import { useAnimation, useTransform, useScroll, motion } from 'framer-motion';
import Image from 'next/image';
import RL1 from '../images/RL1.png';
import RL2 from '../images/RL2.png';
import RL3 from '../images/RL3.jpg';
import RL4 from '../images/RL4.png';
import RL5 from '../images/RL5.webp';
import RL6 from '../images/RL6.png';
import RL7 from '../images/RL7.png';
import RL8 from '../images/RL8.png';
import RL9 from '../images/RL9.png';
import stars from '../images/stars.png';
import { useInView } from 'react-intersection-observer';

const redditUrls = [
  'https://www.reddit.com/r/csMajors/comments/1bv7f2o/comment/kxzghr2/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button', 
  'https://www.reddit.com/r/vscode/comments/1bqr1oy/comment/kxjcojk/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button',
  'https://www.reddit.com/r/vscode/comments/1bqr1oy/comment/kx599k0/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button',
  'https://www.reddit.com/r/vscode/comments/1bqr1oy/comment/kxirken/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button',
  'https://www.reddit.com/r/vscode/comments/1bqr1oy/comment/kx4qx95/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button',
  'https://www.reddit.com/r/vscode/comments/1bqr1oy/comment/l3kodsg/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button',
  'https://www.reddit.com/r/vscode/comments/1bqr1oy/comment/kxa0kdl/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button',
  'https://www.reddit.com/r/developersIndia/comments/1bv7xkg/comment/kxz3bbx/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button',
  'https://www.reddit.com/r/vscode/comments/1bqr1oy/comment/kx8jfz4/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button',
];

function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '3.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, translateY: 0 });
    }
  }, [controls, inView]);

  function handleReview(event: React.MouseEvent<HTMLDivElement>) {
    const reviewNumber = event.currentTarget.getAttribute('data-review-number');

    if (reviewNumber) {
      window.open(redditUrls[parseInt(reviewNumber) - 1], '_blank');
    }
  }

  return (
    <div id='TestimonialSection' className='bg-black w-full text-white'>
      <div
        ref={sectionRef}
        className={`text-3xl sm:text-4xl pt-16 px-10 font-bold ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition-opacity duration-500 ease-in-out`}
      >
        Read what people are saying
      </div>
      <motion.div id='Rating Stars' className='flex justify-center items-center mt-10 mb-10'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      >
        <Image src={stars} alt='rating' width={40} height={40}></Image>
        <Image src={stars} alt='rating' width={40} height={40}></Image>
        <Image src={stars} alt='rating' width={40} height={40}></Image>
        <Image src={stars} alt='rating' width={40} height={40}></Image>
        <Image src={stars} alt='rating' width={40} height={40}></Image>
      </motion.div>
      <div
        ref={ref}
        className={`p-5 mb-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}
      >
        {/* Review 1 */}
        <div
          onClick={handleReview}
          data-review-number='1'
          className={`rounded-md bg-slate-800 hover:bg-opacity-90 border border-slate-600 h-full p-2 cursor-pointer shadow-md shadow-black`}
        >
          <span className='flex items-center'>
            <Image src={RL1} alt='review' className='w-8' />
            <span className='text-sm ml-2'>Psychological-Tax801</span>
          </span>
          <span className='flex items-center p-1'>
            <span className='text-[14px] text-justify'>
              Nice, this is gonna be my new default theme for the next few months. Hits a good mark of being visually interesting while also not being eye-slaughter to look at for long periods of time. Thanks for sharing. <br />
              <br />
              edit: checked it out in a few different projects now and just want to emphasize: SO fucking clean. love this shit
            </span>
          </span>
        </div>
        {/* Review 2 */}
        <div
          onClick={handleReview}
          data-review-number='2'
          className={`rounded-md bg-slate-800 hover:bg-opacity-90 border border-slate-600 h-full p-2 cursor-pointer shadow-md shadow-black`}
        >
          <span className='flex items-center'>
            <Image src={RL2} alt='review' className='w-8' />
            <span className='text-sm ml-2'>black_anarchy</span>
          </span>
          <span className='flex items-center p-1'>
            <span className='text-[14px] text-justify'>
              Amazing job - the more I look at this theme, the better it feels. Wow! <br />
              <br />
              This theme for me is already on part with the likes of OneDark, Seti, Retreon
              , and Agila. <br />
              <br />
              Overall, the color schemes and tokenization for Bash, JavaScript, JSON, YAML/Ansible, and Vue files are awesome - the background color is nice too.
            </span>
          </span>
        </div>
        {/* Review 3 */}
        <div
          onClick={handleReview}
          data-review-number='3'
          className={`rounded-md bg-slate-800 hover:bg-opacity-90 border border-slate-600 h-full p-2 cursor-pointer shadow-md shadow-black`}
        >
          <span className='flex items-center'>
            <Image src={RL3} alt='review' className='w-8 rounded-full' />
            <span className='text-sm ml-2'>pasanflo</span>
          </span>
          <span className='flex items-center p-1'>
            <span className='text-[14px] text-justify'>
              Nice!! I love the first one. <br />
              <br />
              Reminds me of Dracula theme but with added colours and details. Good job!
            </span>
          </span>
        </div>
        {/* Review 4 */}
        <div
          onClick={handleReview}
          data-review-number='4'
          className={`rounded-md bg-slate-800 hover:bg-opacity-90 border border-slate-600 h-full p-2 cursor-pointer shadow-md shadow-black`}
        >
          <span className='flex items-center'>
            <Image src={RL4} alt='review' className='w-8' />
            <span className='text-sm ml-2'>Dt-dave</span>
          </span>
          <span className='flex items-center p-1'>
            <span className='text-[14px] text-justify'>
              Nice theme, installed and using it now. I love it, <br />
              thank you
            </span>
          </span>
        </div>
        {/* Review 5 */}
        <div
          onClick={handleReview}
          data-review-number='5'
          className={`rounded-md bg-slate-800 hover:bg-opacity-90 border border-slate-600 h-30 p-2 cursor-pointer shadow-md shadow-black`}
        >
          <span className='flex items-center'>
            <Image src={RL5} alt='review' className='w-8'/>
            <span className='text-sm ml-2'>Suspect4pe</span>
          </span>
          <span className='flex items-center p-1'>
            <span className='text-[14px] text-justify'>
              I think the first one is the best. These really are very nice themes and they&apos;re very pleasing to the eyes
            </span>
          </span>
        </div>
        {/* Review 6*/}
        <div
          onClick={handleReview}
          data-review-number='6'
          className={`rounded-md bg-slate-800 hover:bg-opacity-90 border border-slate-600 h-30 p-2 cursor-pointer shadow-md shadow-black`}
        >
          <span className='flex items-center'>
            <Image src={RL6} alt='review' className='w-8' />
            <span className='text-sm ml-2'>wolf_codes</span>
          </span>
          <span className='flex items-center p-1'>
            <span className='text-[14px] text-justify'>
              Thank you, I love tokyo night but only thing annoying
              was git diffs and terminal autocompletion were little pale to me. But this theme looks like the one i need. 🫡
            </span>
          </span>
        </div>
        {/* Review 7*/}
        <div
          onClick={handleReview}
          data-review-number='7'
          className={`rounded-md bg-slate-800 hover:bg-opacity-90 border border-slate-600 h-30 p-2 cursor-pointer shadow-md shadow-black`}
        >
          <span className='flex items-center'>
            <Image src={RL7} alt='review' className='w-8' />
            <span className='text-sm ml-2'>fewytv</span>
          </span>
          <span className='flex items-center p-1'>
            <span className='text-[14px] text-justify'>
              Second is now my ❤️
            </span>
          </span>
        </div>
        {/* Review 8 */}
        <div
          onClick={handleReview}
          data-review-number='8'
          className={`rounded-md bg-slate-800 hover:bg-opacity-90 border border-slate-600 h-30 p-2 cursor-pointer shadow-md shadow-black`}
        >
          <span className='flex items-center'>
            <Image src={RL8} alt='review' className='w-8' />
            <span className='text-sm ml-2'>CarbonGrated</span>
          </span>
          <span className='flex items-center p-1'>
            <span className='text-[14px] text-justify'>
              mix of tokyo night and nord, i love it!
            </span>
          </span>
        </div>
        {/* Review 9 */}
        <div
          onClick={handleReview}
          data-review-number='9'
          className={`rounded-md bg-slate-800 hover:bg-opacity-90 border border-slate-600 h-30 p-2 cursor-pointer shadow-md shadow-black`}
        >
          <span className='flex items-center'>
            <Image src={RL9} alt='review' className='w-8' />
            <span className='text-sm ml-2'>misterjyt</span>
          </span>
          <span className='flex items-center p-1'>
            <span className='text-[14px] text-justify'>
              I like the first one, purple is really good to my eye
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
