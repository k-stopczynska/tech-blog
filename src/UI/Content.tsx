import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Content = ({ desc, variant }: { desc: string; variant: string }) => {
	const content =
		variant === 'post'
			? desc
			: variant === 'featured'
			? desc.substring(0, 600) + '...'
			: desc.substring(0, 120) + '...';
	return (
		<div
			className='post'
			dangerouslySetInnerHTML={{
				__html: content,
			}}
		></div>
		// <div className='text-justify'>
		// 	<h2 className='title-secondary'>Introduction</h2>
		// 	<p>
		// 		You are at the beginning of your Python journey with a strong
		// 		grasp of fundamentals, but want to write your first app? This is
		// 		a great place to start.
		// 	</p>
		// 	<p>
		// 		We will build together your first automation bot. Bots are
		// 		useful, you can build on top of that idea, you can use that idea
		// 		to create something on your own, and you will practice your
		// 		Python skills. Remember: if you have to do something more than
		// 		twice- automate it. Let's start!
		// 	</p>

		// 	<h2 className='title-secondary'>Overview</h2>
		// 	<p>
		// 		What are bots? In very simplistic words bots are behaving like
		// 		human in the online world, and do the work that humans don't
		// 		want to do, or it takes too much time and is repetitive.
		// 	</p>
		// 	<p>
		// 		What then could be the subject of a bot? Anything you can
		// 		imagine. Let's say you are tired of liking every photo that your
		// 		friend is posting online- you can make a bot that would do that
		// 		for you daily.You are searching for specific hardware, but you
		// 		want to buy it for a very small amount of money- you can create
		// 		a bot that would scrape the Amazon site and notify you about the
		// 		price, etc.
		// 	</p>

		// 	<h2 className='title-secondary'>Setup</h2>
		// 	<p>
		// 		Since you have used Python before, let's assume you have it
		// 		installed.
		// 	</p>
		// 	<p>What modules/ libraries will we use?</p>
		// 	<ul>
		// 		<li>selenium</li>
		// 		<span>
		// 			This is the core of functionality of our bot. Basically,
		// 			it's a browser that can operate headless (no GUI), and act
		// 			like a human if you give it proper instructions.
		// 		</span>
		// 		<li>time</li>
		// 		<span>
		// 			We will use time module to wait for certain results.
		// 		</span>
		// 		<li>csv</li>
		// 		<span>
		// 			Using csv will enable us to write into csv file, so we have
		// 			nice tabular data at the end.
		// 		</span>
		// 	</ul>

		// 	<h2 className='title-secondary'>The task</h2>
		// 	<p>
		// 		Recently my sourcer friend approached me if we could automate
		// 		the first part of her job. Sourcer is a person that finds people
		// 		with certain skills online and exactly this process we are gonna
		// 		automate today. To do this we will have to scrape LinkedIn site
		// 		searching for certain keywords in people's profiles, and after
		// 		that, we will download the results as a csv file with names and
		// 		links.
		// 	</p>

		// 	<h2 className='title-secondary'>Writing the RecruBot</h2>
		// 	<h3 className='title-tertiary'>Importing relevant libraries</h3>
		// 	<p>
		// 		As we stated, we need to import selenium, time, and csv. All
		// 		relevant imports and working code you can find here:
		// 		<Link
		// 			href='https://github.com/k-stopczynska/rekru_bot'
		// 			className='link'
		// 		>
		// 			click
		// 		</Link>
		// 	</p>

		// 	<h3 className='title-tertiary'>Adding chromedriver</h3>
		// 	<p>
		// 		You need chromedriver for testing, here is the list of downloads
		// 		for Chrome version above 115:
		// 		<Link
		// 			href='https://googlechromelabs.github.io/chrome-for-testing/'
		// 			className='link'
		// 		>
		// 			click
		// 		</Link>
		// 		And here is the list of downloads for 115 and older:
		// 		<Link
		// 			href='https://chromedriver.chromium.org/downloads'
		// 			className='link'
		// 		>
		// 			click
		// 		</Link>
		// 		Remember to put it in PATH executable or add it to you
		// 		environmental paths I you don't know the version of your Chrome,
		// 		type in you browser: chrome://version
		// 	</p>
		// 	<p>
		// 		The easiest way is to paste chromedriver directly in disc C,
		// 		which is always a path executable. Next we are converting it
		// 		from string to Service as chromedriver supports only this format
		// 		of a service attribute. After that there are 2 lines that you
		// 		can comment out while testing if everything works, because
		// 		adding 'headless' flag means that this browser won't be visible.
		// 		It's very convenient to add that when our bot is ready to use.
		// 	</p>
		// 	<img
		// 		src='https://lh3.googleusercontent.com/pw/ABLVV86Dg705xkTzue01wazqOKCtfJ0QsEQ-3xXePtw4rkplQj9zrtVHUTFlAsTjiJqh8wUsf23wbzJq_eHHvrdVeX_LxOJe2Y5SEbpzipFZwBVxvNre6g=w2400'
		// 		alt='initializing chromedriver'
		// 	/>

		// 	<h3 className='title-tertiary'>Adding searching parameters</h3>
		// 	<p>
		// 		The core of our app is a place where our sourcer can define who
		// 		exactly she is looking for. We define a function where she can
		// 		pass skillset, location and current role for her search. Right
		// 		now she is looking for a data analyst, located in Warsaw, who
		// 		knows Python, and worked as a data architect. Since our user
		// 		knows Python to some extent, she can change those directly in a
		// 		code. But we could also ask for inputs from console, or even add
		// 		some sort of GUI using TKinter or some HTML templating engine.
		// 	</p>
		// 	<img
		// 		src='https://lh3.googleusercontent.com/pw/ABLVV850ED9z_aYVGIzemJM69LMOrKSeNfglyb2jA6Z66TNv-Kg5BZQKenUTnrDRpfQ9kmNlE_LOzmpYR-BRkIrp-_y8ZVumSwQf6C7JrstzD5DoDid3TA=w2400'
		// 		alt='search params function'
		// 	/>
		// 	<h3 className='title-tertiary'>Passing query params</h3>
		// 	<p>
		// 		We want to take our search params and write them as a boolean
		// 		value as well as passing a parameter that we want to search only
		// 		for LinkedIn profiles
		// 	</p>
		// 	<img
		// 		src='https://lh3.googleusercontent.com/pw/ABLVV8759J7Qr6A6fHv4F17qXAuPVNzJRpZzOTfq7PVKrfYXqt9Gohxf8chllvdOF_fuQAQIcPcIwOz8APZ3E4LV3P8GgTosiC_C6o2xAc48aWJTPoi2Pg=w2400'
		// 		alt='passing query params'
		// 	/>
		// 	<h3 className='title-tertiary'>Disposing cookie banner</h3>
		// 	<p>
		// 		We are asking our driver to open google.com page. And there we
		// 		find first try-except block. If you open your browser in
		// 		incognito mode and try to do what our driver is doing e.g.
		// 		opening google tab, you will see that there is a cookie banner
		// 		that you have to consent to.
		// 	</p>
		// 	<img
		// 		src='https://lh3.googleusercontent.com/pw/ABLVV85zLCRdcFQ7hUNNcWZyJgm4CUMywSM0PrHXPK23uHPzqcrBxk5PNY6Xwu5qjHeYPTIqz8EkX0kA2es4l1DD9cG8DemROpxVAlW9zBG9vJ3SxExrlQ=w2400'
		// 		alt='disposing cookie banner'
		// 	/>

		// 	<h3 className='title-tertiary'>
		// 		Scrolling through lazy loaded results
		// 	</h3>
		// 	<p>
		// 		First dozens results are lazy-loaded, so our driver needs to
		// 		scroll down to the bottom of the page, until 'next' button
		// 		appears.
		// 	</p>
		// 	<img
		// 		src='https://lh3.googleusercontent.com/pw/ABLVV84LdE9t08BjKIXxRpbunWbOKVOp6ZWlntf-2OGLTCF_9HTAMEvpvDJV-ijrwvcxOnYkVffpVKaLhwGnRPI_bduSwH3pG45UXiUC87rBQN1pX0n6rA=w2400'
		// 		alt='scrolling through lazy-loaded results'
		// 	/>
		// 	<h3 className='title-tertiary'>Changing pages</h3>
		// 	<p>
		// 		After approximately 6 scrolls, there appears 'next' button, that
		// 		clicked will load another results' page. pages_num variable is
		// 		setting how many times this button will be clicked (e. g. how
		// 		many times new page will 'load')
		// 	</p>
		// 	<img
		// 		src='https://lh3.googleusercontent.com/pw/ABLVV86WF7adxNtNwLaWXruCrel1w7pCAJiASsaL69DtTrpDUO567VzfU8DwpKvotRzLqIW3qF-VNy3Bx7BS21DUqWGLi0II8_kNrd0fFkoISurjEDBh1g=w2400'
		// 		alt='changing pages'
		// 	/>
		// 	<h3 className='title-tertiary'>Scraping the content</h3>
		// 	<p>
		// 		Now, the magic begins. We can search with our driver for certain
		// 		elements on a page, and get their attributes or text. To
		// 		understand which element exactly you are looking for, open
		// 		developer tools in Chrome (F12 for Windows, of Fn + F12 on Mac,
		// 		more info:{' '}
		// 		<Link
		// 			href='https://developer.chrome.com/docs/devtools/open/'
		// 			className='link'
		// 		>
		// 			click
		// 		</Link>
		// 		)
		// 	</p>
		// 	<img
		// 		src='https://lh3.googleusercontent.com/pw/ABLVV84W-Z-r5S0O5__6zVCzChKyyIhSvuqkfhr-o38N-oOBm-GGYlMo2NE9aCpsl5Qj36XVHOkwSpfjW894e3I66Wz6SXOypMER89lmOMzN8EUnmpl-rQ=w2400'
		// 		alt='scraping content'
		// 	/>
		// 	<h3 className='title-tertiary'>
		// 		Last but not least: saving our results in csv file
		// 	</h3>
		// 	<p>
		// 		We want our user to be able to return to search results whenever
		// 		she wants. That's why we are taking our data, and with csv
		// 		module creating columns with specific fieldnames we are putting
		// 		our results in them. Every new search will append at the end of
		// 		another one.
		// 	</p>
		// 	<img
		// 		src='https://lh3.googleusercontent.com/pw/ABLVV85J4tNxORXH9FWZOf81nO4V_He7pacFghqjRGK9ZRYGsRN_FyWvls9AvpEA_V86dbixC-UThRrprHY8X-GYKkQOXjE772ZR-0jniI6hzR7VBvpAUA=w2400'
		// 		alt='saving results in a file'
		// 	/>
		// 	<h2 className='title-secondary'>Summary</h2>
		// 	<p>
		// 		The post delves into the details of how this innovative bot
		// 		leverages Python, a versatile programming language, and
		// 		Selenium, a robust web automation framework, to navigate the
		// 		complexities of Chrome and Google search. By harnessing the
		// 		capabilities of these tools, the bot efficiently executes
		// 		searches, enabling recruiters to discover potential candidates
		// 		with specific skill sets, locations, and roles. The
		// 		functionality of the bot is explored in depth, providing
		// 		insights into key features such as dynamic scrolling on
		// 		lazy-loaded pages, handling cookie banners, and interacting with
		// 		search parameters. It's also a valueable skill for a developer
		// 		to scrap webpages for data, and now- it is also your skill!
		// 	</p>
		// </div>
	);
};

export default Content;
