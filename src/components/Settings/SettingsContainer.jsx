import React from 'react';

class Settings extends React.Component {
    render() {
        return (
            <section className="content content-pass">
        		<div className="box">
        			<h1 className="h1 ">Change Password</h1>
        			<div className="main">
        				<div className="main__col one">
        					<div className="row ">
        						<label htmlFor="key01" className="label text_l">Old Password</label>
        						<input className="field2" id="key01" type="password" placeholder="Old Password" />
        					</div>
        					<div className="row ">
        						<label htmlFor="key02" className="label text_l">New Password</label>
        						<input className="field2 " id="key02" type="password" placeholder="New Password"/>
        					</div>
        					<div className="row ">
        						<label htmlFor="key03" className="label text_l">New Password Confirmation</label>
        						<input className="field2 " id="key03" type="password" placeholder="Repeat New Password"/>
        					</div>
        					<div className="form__btns text_c">
        						<button className="btn btn-formSbm">Change</button>
        					</div>
        				</div>
        			</div>
        		</div>
        	</section>
        );
    }
}
 export default Settings;
