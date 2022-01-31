import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.css';
import configuration from '../build/contracts/ArtRegisterations.json';


const createElementFromString = (string) => {
    const div = document.createElement('div');
    div.innerHTML = string.trim();
    return div.firstChild;
};

const CONTRACT_ADDRESS = configuration.networks['5777'];
const CONTRACT_ABI = configuration.abi

const web3 = new Web3(
    Web3.givenProvider || 'http://127.0.0.1:7545'
);

const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

//const TOTAL_ARTWORKS = 0;
let account;

const accountEl = document.getElementById('account');
const ArtworksEl = document.getElementById('NewArtworks');

/*const RegisterArtwork = async (event) => {
        event.preventDefault;
        const data = new FormData(event.target);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        await contract.methods.RegisterNewArt( data.get("ArtName"), data.get("ArtDesc"), data.get("ArtExhibitHist"), data.get("OwnerProv"), data.get("ArtForm"), data.get("ArtImgHash"));
}*/
    
async function RegisterArtwork(event){
    event.preventDefault;
    const AccAddress = accounts[0];
    const ArtName = data.get("ArtName");
    const ArtDesc = data.get("ArtDesc");
    const ArtExhibitHist = data.get("ArtExhibitHist");
    const OwnerProv = data.get("OwnerProv");
    const ArtForm = data.get("ArtForm");
    const ArtImgHash = data.get("ArtImgHash");
    const Register = await window.contract.methods.RegisterNewArt(AccAddress,ArtName,ArtDesc,ArtExhibitHist,OwnerProv,ArtForm,ArtImgHash).send({ from: AccAddress });
}


/*const refreshArtworks = async () => {
    ArtworksEl.innerHTML = '';
    for (let i = 0; i< TOTAL_ARTWORKS; i++){
        const artworks = await contract.methods.ArtRegisterationList(i).call();
        console.log(artworks);
        artworks.id = i
        const ArtworksEl = createElementFromString(
            `<div class="ticket card" style="width: 18rem;">
          <img src="${ArtsImage}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Ticket</h5>
            <p class="card-text">${
              artworks.price / 1e18
            } Eth</p>
            <button class="btn btn-primary">Buy Ownership</button>
          </div>
        </div>
        `)
        ArtworksEl.appendChild(ArtworkEl);
        
    }
}*/

const RegisterArtworks = document.getElementById('registerArt');


const main = async () => {
    const accounts = await web3.eth.requestAccounts();
    account = accounts[0];
    accountEl.innerText = account;
    //await refreshArtworks();

};

main();


$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
   });
});

