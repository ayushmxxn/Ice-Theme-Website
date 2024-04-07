import React from 'react';
import RL1 from '../images/RL1.png';
import RL2 from '../images/RL2.png';
import RL3 from '../images/RL3.jpg';
import RL4 from '../images/RL4.png';
import RL5 from '../images/RL5.webp';
import RL6 from '../images/RL6.png';
import RL7 from '../images/RL7.png';
import RL8 from '../images/RL8.png';
import RL9 from '../images/RL9.png';



import Image from 'next/image';

function Reviews() {
  function handleReview(event: React.MouseEvent<HTMLDivElement>) {
    const reviewNumber = event.currentTarget.getAttribute('data-review-number');

    if (reviewNumber) {
      switch (reviewNumber) {
        case '1':
          window.open('https://www.reddit.com/r/csMajors/comments/1bv7f2o/comment/kxxn0pi/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button');
          break;
        case '2':
          window.open('https://www.reddit.com/r/vscode/comments/1bqr1oy/comment/kx5rr6l/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button');
          break;
        case '3':
          window.open('https://www.reddit.com/r/vscode/comments/1bqr1oy/comment/kx599k0/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button');
          break;
        case '4':
          window.open('https://www.reddit.com/r/vscode/comments/1bqr1oy/comment/kxirken/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button');
          break;
        case '5':
          window.open('https://www.reddit.com/r/vscode/comments/1bqr1oy/comment/kx4qx95/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button');
          break;
        case '6':
          window.open('https://www.reddit.com/r/vscode/comments/1bqr1oy/comment/kx8jfz4/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button');
          break;
        case '7':
          window.open('https://www.reddit.com/r/vscode/comments/1bqr1oy/comment/kxa0kdl/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button');
          break;
        case '8':
          window.open('https://www.reddit.com/r/developersIndia/comments/1bv7xkg/comment/kxz3bbx/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button');
          break;
        case '9':
          window.open('https://www.reddit.com/r/coding/comments/1bt0tkl/comment/kxj9vcd/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button');
          break;
        default:
          console.log("Invalid review number");
      }
    }
  }

  return (
    <div className='bg-black w-full'>
      <div id='TestimonialSection' className='text-4xl mb-16  pt-16 px-5 font-bold'>
        Read what people are saying
      </div>

      <div className='p-5 mb-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>



        {/* Review 1 */}

        <div onClick={handleReview} data-review-number="1" className='rounded-md bg-slate-800  h-full p-2 cursor-pointer'>
          <span className='flex items-center'>
            <Image src={RL1} alt='review' className='w-8' />
            <span className='text-sm ml-2'>Psychological-Tax801</span>
          </span>
          <span className='flex items-center p-1'> 
            <span className='text-[14px] text-justify'>
              Nice, this is gonna be my new default theme for the next few months. Hits a good mark of being visually interesting while also 
              not being eye-slaughter to look at for long periods of time. Thanks for sharing. <br />
              <br />
              edit: checked it out in a few different projects now and just want to emphasize: SO fucking clean. love this shit
            </span>
          </span>
        </div>


        {/* Review 2 */}

        <div onClick={handleReview} data-review-number="2" className='rounded-md bg-slate-800 h-full p-2 cursor-pointer'>
          <span className='flex items-center'>
            <Image src={RL2} alt='review' className='w-8' />
            <span className='text-sm ml-2'>black_anarchy</span>
          </span>
          <span className='flex items-center p-1'> 
            <span className='text-[14px] text-justify'>
              Amazing job - the more I look at this theme, the better it feels. Wow!  <br />
              <br />
              This theme for me is already on part with the likes of OneDark, Seti, Retreon, and Agila. <br />
              <br />
              Overall, the color schemes and tokenization for Bash, JavaScript, JSON, YAML/Ansible, and Vue files are awesome - the background color is nice too.
            </span>
          </span>
        </div>



       {/* Review 3 */}

        <div onClick={handleReview}  data-review-number="3" className='rounded-md bg-slate-800  h-full p-2 cursor-pointer'>
          <span className='flex items-center'>
            <Image src={RL3} alt='review' className='w-8 rounded-full' />
            <span className='text-sm ml-2'>pasanflo</span>
          </span>
          <span className='flex items-center p-1'> 
            <span className='text-[14px] text-justify'>
                Nice!! I love the first one.<br />
                <br />
                Reminds me of Dracula theme but with added colours and details. Good job!
            </span>
          </span>
        </div>


        {/* Review 4*/}

        <div onClick={handleReview} data-review-number="4" className='rounded-md bg-slate-800  h-full p-2 cursor-pointer'>
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

        <div onClick={handleReview} data-review-number="5" className='rounded-md bg-slate-800  h-30 p-2 cursor-pointer'>
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

        <div onClick={handleReview} data-review-number="6" className='rounded-md bg-slate-800  h-30 p-2 cursor-pointer'>
          <span className='flex items-center'>
            <Image src={RL6} alt='review' className='w-8' />
            <span className='text-sm ml-2'>misterjyt</span>
          </span>
          <span className='flex items-center p-1'> 
            <span className='text-[14px] text-justify'>
              ilike the first one, purple is really good to my eye
            </span>
          </span>
        </div>


        {/* Review 7*/}

        <div onClick={handleReview} data-review-number="7" className='rounded-md bg-slate-800  h-30 p-2 cursor-pointer'>
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

        <div onClick={handleReview} data-review-number="8" className='rounded-md bg-slate-800  h-30 p-2 cursor-pointer'>
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
        <div onClick={handleReview} data-review-number="9" className='rounded-md bg-slate-800 h-30 p-2 cursor-pointer'>
          <span className='flex items-center'>
            <Image src={RL9} alt='review' className='w-8' />
            <span className='text-sm ml-2'>TheMunakas</span>
          </span>
          <span className='flex items-center p-1'> 
            <span className='text-[14px] text-justify'>
             I&apos;d make green a bit lighter or so it doesn't bring the first attention every time, otherwise looking very nice!
            </span>
          </span>
        </div>

      </div>
      
    </div>
  );
}

export default Reviews;
