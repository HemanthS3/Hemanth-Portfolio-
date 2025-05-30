const Img_prop = ({ img, name }) => {
  // Check if the image is a URL (external) or a local import
  const isExternalImage = typeof img === 'string' && (img.startsWith('http://') || img.startsWith('https://'));
  
  return (
    <>
      <div className="skill-card group relative flex flex-col items-center">
        <div className="w-[100px] max-sm:w-[75px] h-[100px] max-sm:h-[75px] shadow-xl shadow-slate-300 dark:shadow-lg dark:shadow-blue-500/50 bg-gradient-to-bl from-[#ccc] to-[#eee] dark:from-[#051937] dark:to-[#222] rounded-full place-content-center grid hover:scale-110 transition-transform duration-300 ease-in-out z-10">
          <img 
            src={img} 
            alt={`${name} icon`} 
            className={`max-sm:h-[45px] h-[55px] object-contain ${isExternalImage ? 'p-2' : ''}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/55?text=" + name.charAt(0);
            }}
          />
        </div>
        
        {/* Skill name */}
        <div className="mt-2 text-center">
          <p className="font-medium text-[#00040f] dark:text-slate-300">{name}</p>
        </div>
      </div>
    </>
  );
};

export default Img_prop;
