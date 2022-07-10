// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PhotoArt is ERC721, Ownable {
    constructor() ERC721("PhotoArt", "PRT") {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmfQJziwd9sujHXfYvo6Mwbe2KVrAPFGmDGLXk5aYXyVFE/";
    }

    function safeMint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    } 
}