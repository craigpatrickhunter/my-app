import React, {PureComponent} from 'react'
import Popup from 'react-popup';
import moment from 'moment';


class Form extends PureComponent {
  
  constructor(){
    super();
    this.state = {
      experiment_number:'',
      camera1:'',
      camera2:'',
      camera2_setup:'',
      camera3:'',
      camera3_setup:'',
      camera4:'',
      camera4_setup:'',
      camera5:'',
      camera5_setup:'',
      camera6:'',
      camera6_setup:'',
      camera7:'',
      camera7_setup:'',
      camera8:'',
      camera8_setup:'',
      camera9:'',
      camera9_setup:'',
      camera10:'',
      camera10_setup:'',
      start_date:'',
      end_date:'',
      checked:false,
      show_all_cameras:false,
      error: ''
    }
    this.submitted.bind(this);
    this.handle_experiment_number = this.handle_experiment_number.bind(this);
  }

  handle_experiment_number(event)
  {
    this.setState({
      experiment_number:event.target.value,
    })
  }

  handle_camera1(event)
  {
    this.setState({
      camera1:event.target.value,
      camera2_setup: (
        <select onChange ={this.handle_camera2.bind(this)}>
            <option>None</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
            <option>32</option>
          </select>
      )
    })
  }

  handle_camera2(event)
  {
    this.setState({
      camera2:event.target.value,
      camera3_setup: (
        <select onChange ={this.handle_camera3.bind(this)}>
            <option>None</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
            <option>32</option>
          </select>
      )
    })
  }

  handle_camera3(event){
    this.setState({
      camera3:event.target.value,
      camera4_setup: (
        <select onChange ={this.handle_camera4.bind(this)}>
            <option>None</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
            <option>32</option>
          </select>
      )
    })
  }

  handle_camera4(event){
    this.setState({
      camera4:event.target.value,
      camera5_setup: (
        <select onChange ={this.handle_camera5.bind(this)}>
            <option>None</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
            <option>32</option>
          </select>
      )
    })
  }

  handle_camera5(event){
    this.setState({
      camera5:event.target.value,
      camera6_setup: (
        <select onChange ={this.handle_camera6.bind(this)}>
            <option>None</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
            <option>32</option>
          </select>
      )
    })
  }

  handle_camera6(event){
    this.setState({
      camera6:event.target.value,
      camera7_setup: (
        <select onChange ={this.handle_camera7.bind(this)}>
            <option>None</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
            <option>32</option>
          </select>
      )
    })
  }

  handle_camera7(event){
    this.setState({
      camera7:event.target.value,
      camera8_setup: (
        <select onChange ={this.handle_camera8.bind(this)}>
            <option>None</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
            <option>32</option>
          </select>
      )
    })
  }

  handle_camera8(event){
    this.setState({
      camera8:event.target.value,
      camera9_setup: (
        <select onChange ={this.handle_camera9.bind(this)}>
            <option>None</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
            <option>32</option>
          </select>
      )
    })
  }

  handle_camera9(event){
    this.setState({
      camera9:event.target.value,
      camera10_setup: (
        <select onChange ={this.handle_camera10.bind(this)}>
            <option>None</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
            <option>32</option>
          </select>
      )
    })
  }

  handle_camera10(event){
    this.setState({
      camera10:event.target.value,
    })
  }

  handle_all_cameras(event)
  {
    this.setState({
      show_all_cameras:true
    })
    console.log(this.state.show_all_cameras)
  }

  handle_start_date(event)
  {
    this.setState({
      start_date:event.target.value
    })
  }

  handle_end_date(event)
  {
    this.setState({
      end_date:event.target.value
    })
  }

  handle_Checkbox_Change(){
    this.setState({ show_all_cameras: !this.state.show_all_cameras})
  }

  getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
        dateArray.push( moment(currentDate).format('MM/DD/YYYY') )
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}

  submitted(){
    this.setState({
      error: ''
    })

    var dateArray = this.getDates(this.state.start_date, this.state.end_date);
    
    if(dateArray.length!=0){
      if ( this.state.show_all_cameras == true && this.state.start_date != '' &&this.state.end_date != '' && this.state.experiment_number!='')
      {
        var dateArray=[];
        dateArray = this.getDates(this.state.start_date, this.state.end_date);
        var i;
        for (i = 0; i < dateArray.length; i++) {
          console.log('<endpoint>/<bucket>/imaging/experiment_number', this.state.experiment_number, '/{', dateArray[i], '}/0...23')
        }
      }
      else if ( this.state.camera1 != '' && this.state.start_date != '' &&this.state.end_date !='' && this.state.experiment_number!='')
      {
        for (i = 0; i < dateArray.length; i++) {
          console.log('<endpoint>/<bucket>/imaging/experiment_number', this.state.experiment_number, '/{', dateArray[i], '}/0...23')
        }
        
        console.log('Camera(s)',this.state.camera1, this.state.camera2, this.state.camera3, this.state.camera4,this.state.camera5,this.state.camera6,this.state.camera7,this.state.camera8,this.state.camera9,this.state.camera10, "from", this.state.start_date,'to', this.state.end_date);}
      else{
        this.setState({
        error: 'Fill in the fields correctly'
      })
      }
    } else{
      this.setState({
        error: 'Fill in the fields correctly'
      })
    }
  };

  render(){
    return (

      
      <div>
        <form>

          Experiment: 
          <select onChange = {this.handle_experiment_number}>
            <option>None</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>  
          </select>
          <br/>
          <br/>
          Camera:
          <select onChange ={this.handle_camera1.bind(this)}>
            <option>None</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
            <option>32</option>  
          </select>
          {this.state.camera2_setup}
          {this.state.camera3_setup}
          {this.state.camera4_setup}
          {this.state.camera5_setup}
          {this.state.camera6_setup}
          {this.state.camera7_setup}
          {this.state.camera8_setup}
          {this.state.camera9_setup}
          {this.state.camera10_setup}
          
          <br/>
          <br/>
    
          Show all Cameras:
          <input type="checkbox" onChange = {this.handle_Checkbox_Change.bind(this)}/>      
          

          <br/>
          <br/>
          <label>
            Day:
            <input type="date" onChange={this.handle_start_date.bind(this)} />
            &nbsp;
            to
            &nbsp;
            <input type="date"  onChange={this.handle_end_date.bind(this)}/>
          </label>
          &nbsp;
          <button type="button" onClick= {this.submitted.bind(this)}>
            Submit
          </button>
          
          
          {/*<h1>{this.state.start_date}</h1>
          <h1>{this.state.end_date}</h1>*/}
          <h1 class = "error_message">{this.state.error}</h1>

          
        </form>
      </div>
    )
  }
}

export default Form

