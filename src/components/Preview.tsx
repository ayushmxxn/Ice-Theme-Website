'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import BlazeTheme from '../images/Blaze Theme Preview.png';
import IceTheme from '../images/Ice Theme Preview.png';
import HTML from '../images/html.png'
import CSS from '../images/css.png'
import JS from '../images/JS.png'
import Py from '../images/Py.png'
import PHP from '../images/php.png'
import Rust from '../images/rust.png'

function Preview() {
    const [currentTab, setCurrentTab] = useState({
        name: 'Ice Theme',
        logo: 'https://i.imgur.com/ZZJb8Ks.png'
    });
    const [preview, setPreview] = useState(BlazeTheme);

    const themes = [
        { name: 'HTML', logo: 'https://imgs.search.brave.com/np9Suzrp_3kNkWQhHCshEnLZq-1foqWL_DUMi9XXyWE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM4L0hUTUw1X0Jh/ZGdlLnN2Zw.svg', image: HTML },
        { name: 'CSS', logo: 'https://imgs.search.brave.com/pjR7zv6dMeSvenrG5yT2qxNLiZmIu_-1XMu9yQ1A5B4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYyL0NTUzNfbG9n/by5zdmc.svg', image: CSS },
        { name: 'JavaScript', logo: 'https://imgs.search.brave.com/B7D1tkrHWdjtScPTvSKLWjQK0N9ZefWAjmX0DRkzWb0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA0L2phdmFzY3Jp/cHQtbG9nby5wbmc', image: JS },
        { name: 'Python', logo: 'https://imgs.search.brave.com/M-FiGkB1jPVADW6xtp-i7TJcdhipqz463z8s2cuR3WY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MTUyZmNlZjEw/MTRjMGI1ZTQ5Njcu/cG5n', image: Py },
        { name: 'PHP', logo: 'https://imgs.search.brave.com/1bmxzs8_KwRyKhFN24QTKVHedjg6fksvdeHJN6j86Lc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MTc5MWNlZjEw/MTRjMGI1ZTQ5OTQu/cG5n', image: PHP },
        { name: 'Rust', logo: 'https://imgs.search.brave.com/dgmH-9q7JYBHpcTzxQqTYg6_11DFgUnaF4ipev2Uj3M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vcHJhY3RpY2Fs/ZGV2L2ltYWdlL2Zl/dGNoL3MtLVIyOFlo/aGl3LS0vY19saW1p/dCxmX2F1dG8sZmxf/cHJvZ3Jlc3NpdmUs/cV9hdXRvLHdfODgw/L2h0dHBzOi8vYnJ1/bm9jYXB1YW5vLmZp/bGVzLndvcmRwcmVz/cy5jb20vMjAyMy8w/MS9ydXN0YWNlYW4t/ZmxhdC1oYXBweS5w/bmc_dz00NjA', image: Rust }
    ];

    const handlePrevious = () => {
        const currentIndex = themes.findIndex(theme => theme.name === currentTab.name);
        const previousIndex = (currentIndex - 1 + themes.length) % themes.length;
        setCurrentTab(themes[previousIndex]);
        setPreview(themes[previousIndex].image);
    };

    const handleNext = () => {
        const currentIndex = themes.findIndex(theme => theme.name === currentTab.name);
        const nextIndex = (currentIndex + 1) % themes.length;
        setCurrentTab(themes[nextIndex]);
        setPreview(themes[nextIndex].image);
    };

    return (
        <div id='PreviewSection' className='mb-40 mt-40 mx-5 '>
            <div  className='flex justify-center '>
                <div  className=' flex-col items-center  rounded  w-[1000px] flex justify-center'>
                    <div  className='flex justify-center items-center relative top-3'>
                        <div  className='flex gap-1 items-center justify-center'>
                            <Image src={currentTab.logo} alt='logo' width={20} height={20}/>
                            <p>{currentTab.name}</p>
                        </div>
                    </div>
                    <div className='flex justify-center flex-col items-center '>
                        <Image src={preview} alt='Preview' className='rounded-sm' width={900} height={600} />
                    </div>
                    <div className="flex items-center gap-3 relative bottom-2 p-2">
                        <p className='mr-3 cursor-pointer' onClick={handlePrevious}>
                            &larr; 
                        </p>
                        <div className='flex justify-center items-center gap-3'>
                            <Image id='html logo' onClick={() => setCurrentTab(themes[0])} src={themes[0].logo} alt='' width={15} height={15}/>
                            <Image id='css logo' onClick={() => setCurrentTab(themes[1])} src={themes[1].logo} alt='' width={15} height={15}/>
                            <Image id='js logo' onClick={() => setCurrentTab(themes[2])} src={themes[2].logo} alt='' width={15} height={15}/>
                            <Image id='python logo' onClick={() => setCurrentTab(themes[3])} src={themes[3].logo} alt='' width={15} height={15}/>
                            <Image id='php logo' onClick={() => setCurrentTab(themes[4])} src={themes[4].logo} alt='' width={15} height={15}/>
                            <Image id='rust logo' onClick={() => setCurrentTab(themes[5])} src={themes[5].logo} alt='' width={15} height={15}/>
                        </div>
                        <p className='ml-3 cursor-pointer' onClick={handleNext}>
                             &rarr;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Preview;
