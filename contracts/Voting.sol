// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Voting is Ownable {
    uint public votePrice;
    IERC20 public voteToken;

    mapping(string => uint) public votes; // mapping image url to votes

    event Voted(
        address indexed voter,
        string indexed imageId,
        string cosplayerId,
        string eventId,
        uint256 amount,
        uint256 timestamp
    );

    constructor(address _tokenAddress) {
        votePrice = 10;
        voteToken = IERC20(_tokenAddress);
    }

    function setVotePrice(uint _votePrice) external {
        require(msg.sender == owner(), "Only the owner can set the vote price");
        votePrice = _votePrice;
    }

    function setVoteToken(address _tokenAddress) external {
        require(msg.sender == owner(), "Only the owner can set the vote token");
        voteToken = IERC20(_tokenAddress);
    }

    function upvote(
        string memory imageId,
        uint amount,
        string memory cosplayerId,
        string memory eventId
    ) public payable {
        require(amount > 0, "Amount must be greater than zero");
        uint voteValue = votePrice * amount;
        require(msg.value >= voteValue, "Not enough ether to vote");
        votes[imageId] += amount;
        emit Voted(
            msg.sender,
            imageId,
            cosplayerId,
            eventId,
            amount,
            block.timestamp
        );
        voteToken.transferFrom(msg.sender, address(this), voteValue);
    }

    function withdraw() external {
        uint balance = voteToken.balanceOf(address(this));
        voteToken.transfer(owner(), balance);
    }
}
