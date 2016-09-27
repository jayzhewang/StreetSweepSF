import React from 'react';
import Map from '../map/map';

class Address extends React.Component {
  constructor(props){
    super(props);
    this.addresses = [];
    this.state = {
      showAddressInput: false,
      showAddressInputLink: true,
      showMap: false,
      mapCoords: "",
      inputAddress: "",
    };

    this.showAddressInput = this.showAddressInput.bind(this);
    this.submitAddress = this.submitAddress.bind(this);
    this.removeAddress = this.removeAddress.bind(this);
    this.setupChromeSync = this.setupChromeSync.bind(this);
    this.setAddresses = this.setAddresses.bind(this);
  }

  componentDidMount(){
    this.props.getChromeSync();
  }

  componentDidUpdate(){
    this.setupChromeSync();
    this.setAddresses();
  }

  setupChromeSync(){
    if(this.props.addresses === undefined){
      this.props.setChromeSync([]);
    }
  }

  setAddresses(){
    this.addresses = this.props.addresses;
  }

  submitAddress(e){
    e.preventDefault();
    this.addresses.push(this.state.inputAddress);
    this.props.setChromeSync(this.addresses);
    this.setState({showAddressInput: false,
                   showAddressInputLink: true,
                   inputAddress: ""});
  }

  removeAddress(address, e){
    e.preventDefault();
    let idx = this.addresses.indexOf(address);
    this.addresses.splice(idx, 1);
    this.props.setChromeSync(this.addresses);
    this.setState(this.state);
  }

  showAddressInput(){
    this.setState({ showAddressInput: true,
                    showAddressInputLink: false });
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  addressInput(){
    if(this.state.showAddressInput === true){
      return (
        <form onSubmit={this.submitAddress}>
          <input type='text'
                 placeholder='Input address here'
                 value={this.state.inputAddress}
                 onChange={this.update('inputAddress')}
                 className='address-input-box-input'/>

          <input type='submit'
                 value='+'
                 className='address-input-box-submit'/>
        </form>
      );
    }
  }

  addressesInputLink(){
    if(this.state.showAddressInputLink === true){
      return (
        <div onClick={this.showAddressInput}>
          Add Address
        </div>
      );
    }
  }

  renderAddresses(addresses){
    if(addresses.length === 0 || addresses.length === undefined){
      return (
        <div>No addresses found!</div>
      );
    } else {
      let addressArr = addresses.map((address, i)=>{
        return(
          <div className='address-list-container' key={`address${i}`}>
            <div className='list-container'>
              <li type='circle' >
                {address}
              </li>
            </div>

            <div className='close-icon-container'>
              <img src='../../../assets/icons/close-icon.png'
                onClick={(e)=>this.removeAddress(address, e)}
                height='17'
                width='17'/>
            </div>

            <div>
              <img src='../../../assets/icons/map-icon.png'
                   onClick={(e)=>this.toggleMap(address, e)}
                   height='17'
                   width='17'/>
            </div>
          </div>
        );
      });

      return(
        <ul>{addressArr}</ul>
      );
    }
  }

  toggleMap(address, e){
    e.preventDefault();
    this.setState({mapAdress: address});
  }

  showMap(){
    return (
      <Map position={[37.7749, -122.4194]} />
    );
  }

  render(){
    if(this.props.addresses === undefined){
      return (
        <div>Loading...</div>
      );
    } else {
      return (
        <div>
          <div>
            <div className='address-list'>
              {this.renderAddresses(this.props.addresses)}
            </div>
            <div className='address-input-link'>
              {this.addressesInputLink()}
            </div>
            <div className='address-input-box'>
              {this.addressInput()}
            </div>
          </div>

          {this.showMap()}
        </div>
      );
    }
  }
}

export default Address;
