import profileIcon from '../asset/profileIcon.svg'
import BioForm from './BioForm';


const Bio =()=>{
return (
    <section className="bio">
        <div className="profile-photo" role="button" title = 'click to edit photo'>
            <img src={profileIcon} alt="profile iCon"/>
        </div>
        <div className="profile-info">
            <p className="name"> StephenChiag</p>
            <p className="about"> Building instagramClone</p>
            <button>Edit</button>
          <BioForm/>
        </div>
    </section>
)
}

export default Bio;