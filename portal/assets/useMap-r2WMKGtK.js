import{L as a}from"./leaflet-src-KPccyqlJ.js";function M(){return{createMap:(e,r,t=11)=>a.map("map",{center:[e,r],zoom:t}),addLayersToMap:e=>{a.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(e),a.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{opacity:.2}).addTo(e)},createOperationalBaseMarker:(e,r,t=!0)=>a.marker([e,r],{draggable:t}),createExperienceLocationMarker:(e,r,t=!0)=>{const o=a.divIcon({html:`
      <div class="w-[40px] h-[40px] flex items-center justify-center rounded-t-full rounded-l-full border border-blue-900 bg-gradient-to-r from-blue-900 to-blue-200 rotate-45">
        <div class="rounded-full h-[30px] w-[30px] bg-gradient-to-r from-blue-100 to-white shadow flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-[25px] h-[25px] fill-blue-900 -rotate-45"
          >
            <path d="M7,17L10.2,10.2L17,7L13.8,13.8L7,17M12,11.1A0.9,0.9 0 0,0 11.1,12A0.9,0.9 0 0,0 12,12.9A0.9,0.9 0 0,0 12.9,12A0.9,0.9 0 0,0 12,11.1M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
          </svg>
        </div>
      </div>
      `,className:"",iconSize:[42,42],iconAnchor:[21,50]});return a.marker([e,r],{icon:o,draggable:t})},panMapToCoordinates:(e,r,t)=>{e.panTo(new a.LatLng(r,t))},resetMapView:(e,r,t,o=14)=>{e.setView(new a.LatLng(r,t),o)},tidyUpMap:e=>{e&&(e.off(),e.remove())}}}export{M as u};
