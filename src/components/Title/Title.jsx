import logo from './Logo.png'
const Title = () => {
    return (
        
        <div className="flex items-center justify-center mr-12">
            <img className="h-20 w-30" src={logo} alt="ListApp" />
            <h1 className="text-5xl font-anton font-bold tracking-widest text-center " >LIST APP</h1>
        </div>
        
    );
}

export { Title }