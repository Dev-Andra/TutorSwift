import image from '../../assets/cometchat.jpg';

export default function Home() {
    return (
        <div className="h-screen w-screen">
            <div className={`h-5/6 w-3/6 flex justify-center flex-col mx-auto`}>
                <p className="text-lg font-semibold cursor-pointer mb-10 hover:opacity-80 transition-all ease-in-out duration-400"><span className="bg-green-400 border-2 border-green-400 bg-opacity-50 px-4 py-1 rounded-full mr-5">Official Launch!</span> Read About our Application &#10230;</p>
                <h1 className={`text-8xl font-extrabold w-5/6 cursor-default mb-8`}>Find tutors, quick and easy.</h1>
                <p className={`text-2xl w-3/5 leading-relaxed text-gray-500`}>TutorSwift looks towards a future with on demand lessons from reliable people. With many useful features such as schedules, waiting lists, etc., you can find a tutor easily.</p>
            </div>
            <div className={`h-5/6 bg-slate-900 flex flex-row text-white`}>
                <div className={`w-3/6 py-32 px-20`}>
                    <h2 className={`text-5xl font-bold mb-5`}>Easy to Communicate</h2>
                    <p className='text-lg leading-relaxed'>Using Comet Chat in our application has revolutionized how our users communicate and collaborate. With its powerful features and customizable options, we've been able to create a dynamic and engaging platform for our users. Whether it's instant messaging, group chats, or multimedia sharing, Comet Chat has enabled seamless communication among our users, fostering stronger connections and driving engagement. Plus, the extensive documentation and reliable support from the Comet Chat team have made integration and maintenance a breeze, allowing us to focus on delivering the best possible experience to our users.</p>
                </div>
                <div className={`w-3/6`}><img src={image} className='w-11/12 h-auto items-center justify-center'/></div>
            </div>
        </div>
    )
}