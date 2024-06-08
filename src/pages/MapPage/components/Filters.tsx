import { Component } from "react";

import styles from './Filters.module.css';

class Filters extends Component {

    state = {
        cityname: '',
        radius: 0,
        school_type: '',
    };

    render() {
        const {
            cityname,
            radius,
            school_type,
        } = this.state;
        return (
            <div className={styles.sidebarContainer}>

                <h2>Filters</h2>

                <form className={styles.formContainer}>
                    <h2 >City Name</h2>

                    <input
                        id="city_name"
                        onChange={(e)=> { this.setState({ cityname: e.target.value }); }}
                        type="text"
                        value={cityname}
                    />

                    <h2
                        className="school_type"
                    >School Type</h2>

                    <select
                        className="form_selesct"
                        onChange={(e)=> { this.setState({ school_type: e.target.value }); }}
                        value={school_type}
                    >
                        <option value="1" >Pre School</option>
                        <option value="2">Primary School</option>
                    </select>

                    <p>{this.state.school_type}</p>
                    <h2>Radius</h2>

                    <input

                        max={5}
                        min={0.1}
                        onChange={(e)=> { this.setState({ radius: e.target.value }); }}
                        type="range"
                        value={radius}
                    ></input>

                </form>
            </div>
        );
    }
}

export default Filters;
