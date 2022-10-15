import React from 'react';
import ReactStreetview from 'react-streetview';

class VR extends React.Component {
  render() {
    const googleMapsApiKey = 'AIzaSyDpG-NeL-XGYAduQul2JenVr86HIPITEso';

    const streetViewPanoramaOptions = {
      position: { lat: 46.9171876, lng: 17.8951832 },
      pov: { heading: 100, pitch: 0 },
      zoom: 1,
      addressControl: false,
      showRoadLabels: false,
      zoomControl: false
    };

    return (
      <div
        style={{
          width: '800px',
          height: '450px',
          backgroundColor: '#eeeeee'
        }}
      >
        <ReactStreetview
          apiKey={googleMapsApiKey}
          streetViewPanoramaOptions={streetViewPanoramaOptions}
        />
      </div>
    );
  }
}

export default VR;
