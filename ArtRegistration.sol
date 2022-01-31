pragma solidity >=0.4.22 <0.9.0;


contract ArtRegisterations {
    address public owner = msg.sender;
    uint public ArtCounting = 0;

    struct ArtInfo{

    uint ArtCount;
    address owner;
    string ArtName;
    string ArtArtist;
    string ArtExhibitHist;
    string OwnerProv;
    string ArtForm;
    string ArtHash;
    
    
    }

    mapping(uint => ArtInfo) public ArtRegisterationList;
    
    constructor() public {
        RegisterNewArt(0x282F5e5bB5Bb6936A69db96f896364881a05e188,"IvanNFT", "IvonJobonPong", "NIL", "IvonJobonPong", "Digital","ABCD321321");
    }

    function RegisterNewArt(address _owner,string memory _ArtName, string memory _ArtArtist, string memory _ArtExhibitHist,string memory _OwnerProv,string memory _ArtForm,string memory _ArtHash) public{
        ArtCounting ++;
        ArtRegisterationList[ArtCounting] = ArtInfo(ArtCounting,_owner,_ArtName,_ArtArtist,_ArtExhibitHist,_OwnerProv,_ArtForm,_ArtHash);
    }
    
    

}
