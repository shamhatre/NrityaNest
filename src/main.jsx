
import React, {useMemo, useState} from "react";
import { createRoot } from "react-dom/client";
import { Search, Sparkles, Clock3, CalendarDays, ArrowRight, X, CheckCircle2, Heart, Music2, SlidersHorizontal } from "lucide-react";
import "./styles.css";

const dances = [
  {name:"Bharatanatyam", category:"Indian Classical", emoji:"🪷", level:"All Levels", price:1500, duration:"60 min", days:"2 days/week", desc:"Graceful expressions, rhythm and traditional technique."},
  {name:"Kathak", category:"Indian Classical", emoji:"🌸", level:"All Levels", price:1500, duration:"60 min", days:"2 days/week", desc:"Footwork, spins and storytelling through movement."},
  {name:"Kathakali", category:"Indian Classical", emoji:"🎭", level:"Intermediate", price:1800, duration:"75 min", days:"2 days/week", desc:"Dramatic storytelling, expression and powerful movement."},
  {name:"Kuchipudi", category:"Indian Classical", emoji:"✨", level:"All Levels", price:1500, duration:"60 min", days:"2 days/week", desc:"Elegant classical dance with expressive storytelling."},
  {name:"Odissi", category:"Indian Classical", emoji:"🌺", level:"All Levels", price:1500, duration:"60 min", days:"2 days/week", desc:"Sculptural poses, lyrical movement and expressive grace."},
  {name:"Manipuri", category:"Indian Classical", emoji:"🌿", level:"All Levels", price:1500, duration:"60 min", days:"2 days/week", desc:"Soft, flowing movement rooted in devotional tradition."},
  {name:"Mohiniyattam", category:"Indian Classical", emoji:"🦢", level:"All Levels", price:1500, duration:"60 min", days:"2 days/week", desc:"Gentle, graceful movement and expressive storytelling."},
  {name:"Sattriya", category:"Indian Classical", emoji:"🪔", level:"All Levels", price:1500, duration:"60 min", days:"2 days/week", desc:"Assamese classical dance with rhythm and devotion."},
  {name:"Bollywood", category:"Bollywood", emoji:"🎬", level:"All Levels", price:999, duration:"60 min", days:"2 days/week", desc:"High-energy Indian film choreography made for fun."},
  {name:"Hip-Hop", category:"Street", emoji:"🔥", level:"All Levels", price:999, duration:"60 min", days:"2 days/week", desc:"Grooves, foundations, freestyle and urban choreography."},
  {name:"Contemporary", category:"Western", emoji:"💫", level:"All Levels", price:1200, duration:"60 min", days:"2 days/week", desc:"Fluid movement, musicality and expressive choreography."},
  {name:"Salsa", category:"Latin", emoji:"💃", level:"All Levels", price:1200, duration:"60 min", days:"2 days/week", desc:"Partnerwork, rhythm and joyful Latin movement."},
  {name:"Bhangra", category:"Indian Folk", emoji:"🥁", level:"All Levels", price:999, duration:"60 min", days:"2 days/week", desc:"Energetic Punjabi folk movement with big joyful steps."},
  {name:"Garba", category:"Indian Folk", emoji:"🪩", level:"All Levels", price:999, duration:"60 min", days:"2 days/week", desc:"Festive circular patterns and vibrant Gujarati rhythm."},
  {name:"Lavani", category:"Indian Folk", emoji:"🌹", level:"All Levels", price:1200, duration:"60 min", days:"2 days/week", desc:"Expressive Maharashtrian folk dance with energetic rhythm."},
  {name:"Jazz", category:"Western", emoji:"🎷", level:"All Levels", price:1200, duration:"60 min", days:"2 days/week", desc:"Stylized lines, musicality and energetic combinations."},
  {name:"K-Pop", category:"Pop", emoji:"💗", level:"All Levels", price:999, duration:"60 min", days:"2 days/week", desc:"Learn popular K-pop choreography step by step."},
  {name:"Zumba", category:"Fitness", emoji:"⚡", level:"All Levels", price:799, duration:"45 min", days:"3 days/week", desc:"Dance-inspired fitness with easy-to-follow routines."},
  {name:"Ballroom", category:"Partner", emoji:"👑", level:"All Levels", price:1400, duration:"60 min", days:"2 days/week", desc:"Classic partner dance technique, posture and rhythm."},
  {name:"Freestyle", category:"Street", emoji:"🦋", level:"All Levels", price:899, duration:"60 min", days:"2 days/week", desc:"Build confidence, musicality and your own movement style."}
];

const levels = [
  {id:"Beginner", icon:"🌱", title:"Beginner", text:"Start from zero"},
  {id:"Intermediate", icon:"🌿", title:"Intermediate", text:"Build your skills"},
  {id:"Advanced", icon:"🔥", title:"Advanced", text:"Master your craft"}
];

function App(){
  const [category,setCategory]=useState("All");
  const [level,setLevel]=useState("All");
  const [query,setQuery]=useState("");
  const [selected,setSelected]=useState(null);
  const [booking,setBooking]=useState(null);
  const [booked,setBooked]=useState(false);

  const categories=["All",...new Set(dances.map(d=>d.category))];

  const filtered=useMemo(()=>dances.filter(d=>{
    const q=d.name.toLowerCase().includes(query.toLowerCase()) || d.category.toLowerCase().includes(query.toLowerCase());
    const c=category==="All" || d.category===category;
    const l=level==="All" || d.level==="All Levels" || d.level===level;
    return q && c && l;
  }),[category,level,query]);

  const chooseLevel=(l)=>{
    setLevel(l);
    document.getElementById("dance-list")?.scrollIntoView({behavior:"smooth"});
  };

  return <div className="app">
    <nav className="nav">
      <div className="brand"><span className="brand-icon">🩰</span><span>Nritya<span>Nest</span></span></div>
      <div className="nav-links">
        <a href="#home">Home</a><a href="#explore">Dance Forms</a><a href="#levels">Levels</a><a href="#pricing">Pricing</a>
      </div>
      <button className="nav-btn" onClick={()=>document.getElementById("explore").scrollIntoView({behavior:"smooth"})}>Start Learning <ArrowRight size={16}/></button>
    </nav>

    <main>
      <section className="hero" id="home">
        <div className="hero-orb orb1"></div><div className="hero-orb orb2"></div>
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={16}/> Dance • Learn • Express</div>
          <h1>Find your<br/><em>rhythm.</em></h1>
          <p>Discover beautiful dance forms, learn at your own level, and turn every step into a little celebration.</p>
          <div className="hero-actions">
            <button className="primary" onClick={()=>document.getElementById("explore").scrollIntoView({behavior:"smooth"})}>Explore Dance Forms <ArrowRight size={18}/></button>
            <button className="secondary" onClick={()=>chooseLevel("Beginner")}>I'm a Beginner 🌱</button>
          </div>
          <div className="trust"><span>💗 20+ dance styles</span><span>•</span><span>₹799 starting price</span><span>•</span><span>Flexible levels</span></div>
        </div>
        <div className="hero-art">
          <div className="sun"></div>
          <div className="dance-card card-a">🌸<small>Express</small></div>
          <div className="dance-card card-b">🎶<small>Move</small></div>
          <div className="dancer">💃</div>
          <div className="note n1">♪</div><div className="note n2">♫</div><div className="note n3">✦</div>
        </div>
      </section>

      <section className="levels-section" id="levels">
        <div className="section-head"><div><div className="eyebrow">YOUR JOURNEY</div><h2>Choose your level</h2></div><p>No matter where you begin, there's a place for you on the dance floor.</p></div>
        <div className="level-grid">
          {levels.map(l=><button key={l.id} className={"level-card "+(level===l.id?"active":"")} onClick={()=>chooseLevel(l.id)}>
            <div className="level-icon">{l.icon}</div><div><h3>{l.title}</h3><p>{l.text}</p></div><ArrowRight size={20}/>
          </button>)}
        </div>
      </section>

      <section className="explore" id="explore">
        <div className="section-head">
          <div><div className="eyebrow">EXPLORE</div><h2>Pick your dance</h2></div>
          <p>From timeless classical forms to high-energy street styles.</p>
        </div>
        <div className="toolbar">
          <div className="search"><Search size={19}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search dance form..."/></div>
          <div className="chips">{categories.map(c=><button key={c} className={category===c?"chip active":"chip"} onClick={()=>setCategory(c)}>{c}</button>)}</div>
        </div>
        <div className="result-note"><SlidersHorizontal size={15}/> Showing {filtered.length} dance forms {level!=="All" && <><span>•</span> {level} level</>}</div>
        <div className="dance-grid" id="dance-list">
          {filtered.map(d=><article className="dance-card-ui" key={d.name}>
            <div className="dance-thumb"><span>{d.emoji}</span><div className="category-tag">{d.category}</div><button className="heart"><Heart size={17}/></button></div>
            <div className="dance-info">
              <h3>{d.name}</h3><p>{d.desc}</p>
              <div className="meta"><span><Clock3 size={15}/>{d.duration}</span><span><CalendarDays size={15}/>{d.days}</span></div>
              <div className="price-row"><div><small>Starting from</small><strong>₹{d.price.toLocaleString("en-IN")}<i>/month</i></strong></div><button onClick={()=>setSelected(d)}>View class <ArrowRight size={16}/></button></div>
            </div>
          </article>)}
        </div>
        {!filtered.length && <div className="empty">No dance forms found. Try another search 💗</div>}
      </section>

      <section className="pricing" id="pricing">
        <div className="price-banner"><div><div className="eyebrow">SIMPLE PRICING</div><h2>Start dancing without overthinking it.</h2><p>Prices shown are sample starting prices. Actual class fees can vary by instructor, location and batch.</p></div><div className="price-big"><small>From</small><strong>₹799</strong><span>/ month</span></div></div>
      </section>

      <section className="cta">
        <div><span>🪩</span><h2>Your next chapter starts with one step.</h2><p>Choose a dance. Choose your level. We'll take it from there.</p></div>
        <button className="primary" onClick={()=>document.getElementById("explore").scrollIntoView({behavior:"smooth"})}>Find My Dance <ArrowRight size={18}/></button>
      </section>
    </main>

    <footer><div className="brand"><span className="brand-icon">🩰</span><span>Nritya<span>Nest</span></span></div><p>Made for people who believe every body can dance. ♡</p><span>© 2026 NrityaNest</span></footer>

    {selected && <div className="modal-backdrop" onClick={()=>setSelected(null)}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <button className="close" onClick={()=>setSelected(null)}><X/></button>
        <div className="modal-emoji">{selected.emoji}</div><div className="eyebrow">{selected.category}</div><h2>{selected.name}</h2><p>{selected.desc}</p>
        <div className="modal-stats"><div><Clock3/><b>{selected.duration}</b><small>per class</small></div><div><CalendarDays/><b>{selected.days}</b><small>schedule</small></div><div><Sparkles/><b>₹{selected.price.toLocaleString("en-IN")}</b><small>starting / month</small></div></div>
        <label>Choose level<select value={level==="All"?"Beginner":level} onChange={e=>setLevel(e.target.value)}><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></label>
        <button className="primary full" onClick={()=>{setBooking(selected);setSelected(null)}}>Book a trial / class <ArrowRight size={18}/></button>
      </div>
    </div>}

    {booking && <div className="modal-backdrop" onClick={()=>setBooking(null)}>
      <div className="modal success-modal" onClick={e=>e.stopPropagation()}>
        <button className="close" onClick={()=>setBooking(null)}><X/></button>
        {!booked ? <><div className="success-icon">💗</div><h2>Reserve your spot</h2><p>You're booking <b>{booking.name}</b>. This demo form doesn't take payment.</p>
          <input className="form-input" placeholder="Your name"/><input className="form-input" placeholder="Email or phone"/>
          <select className="form-input" defaultValue="Beginner"><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select>
          <button className="primary full" onClick={()=>setBooked(true)}>Confirm booking <CheckCircle2 size={18}/></button>
        </> : <><div className="success-icon">🎉</div><h2>You're on the list!</h2><p>We've saved your demo booking for <b>{booking.name}</b>.</p><button className="primary full" onClick={()=>{setBooking(null);setBooked(false)}}>Done</button></>}
      </div>
    </div>}
  </div>
}

createRoot(document.getElementById("root")).render(<App/>);
