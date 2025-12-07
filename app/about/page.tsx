export default function About() {
  return (
    <>
      <div className="section-hero about flex-1 bg-zinc-50 font-sans dark:bg-black">
        <div className="hero-bottom">
          <div className="small-text">About Nova Stack</div>
          <h1>On a mission to improve people's lives by untangling the web world.</h1>
        </div>
      </div>
      <section className="team container mx-auto">
        <h2 className="text-center text-3xl pb-[16px]"> An International Team </h2>
        <p className="subtitle text-center pb-[16px]">Kestra is led by experienced founders and industry veterans dedicated to innovation, quality, and customer success.</p>
        <div className="team-list grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {users.map(user => (
            <div className="team-item">
              <img src={user.imgSrc} alt="" />
              <h3>{user.name}</h3>
              <p>{user.proficiency}</p>
            </div>
          ))}
          <div className="team-item">
            <img src="https://placehold.co/110x110/333333/ffffff?text=Wish+to+see+your+photo?" alt="" />
            <div className="border p-2 rounded-[40px] bg-gray-800 text-white mt-1">Open Positions</div>
          </div>   
        </div>
      </section>
    </>
  );
}
