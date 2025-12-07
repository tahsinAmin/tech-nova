export default function About() {
  return (
    <>
      <div className="section-hero about flex-1 bg-zinc-50 font-sans dark:bg-black container">
        <div className="hero-bottom">
          <div className="small-text">About Logo</div>
          <h1>On a mission to improve people's lives by untangling the web3 world.</h1>
        </div>
      </div>
      <section className="team container">
        <h2 className="text-center text-3xl pt-[80px] pb-[16px]"> An International Team </h2>
        <p className="text-center pb-[16px]">Kestra is led by experienced founders and industry veterans dedicated to innovation, quality, and customer success.</p>
        <div className="team-list grid grid-cols-2 gap-4">
          <div className="team-item">
            <img  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h2>John Doe</h2>
            <p>Founder</p>
          </div>
          <div className="team-item">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h2>John Doe</h2>
            <p>Founder</p>
          </div>   
          <div className="team-item">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h2>John Doe</h2>
            <p>Founder</p>
          </div>
          <div className="team-item">
            <img src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h2>John Doe</h2>
            <p>Founder</p>
          </div>   
          <div className="team-item">
            <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h2>John Doe</h2>
            <p>Founder</p>
          </div>
          <div className="team-item">
            <img src="https://placehold.co/110x110/333333/ffffff?text=Wish+to+see+your+photo?" alt="" />
            <div className="border p-2 rounded-[40px] bg-gray-800 text-white mt-1">Open Positions</div>
          </div>   
        </div>
      </section>
    </>
  );
}
