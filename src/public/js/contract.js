let account;
const connectMetamask = async () => {
	if (window.ethereum !== "undefined") {
		const accounts = await ethereum.request({ method: "eth_requestAccounts" });
		account = accounts[0];

		document.getElementById("accountArea").innerHTML = `<p style="color:green;" id="accountArea">${account}</p>`;
	}

}

const Address = "0x6eDb1f327b1662bA2F187Fb16cd9085bF67F0c6c";
const ABI = [
	{
		"inputs": [],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "uid",
				"type": "uint256"
			}
		],
		"name": "Manufactured",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_account",
				"type": "address"
			}
		],
		"name": "ManufacturerAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "uid",
				"type": "uint256"
			}
		],
		"name": "PurchasedByCustomer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "uid",
				"type": "uint256"
			}
		],
		"name": "PurchasedByThirdParty",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "uid",
				"type": "uint256"
			}
		],
		"name": "ReceivedByCustomer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "uid",
				"type": "uint256"
			}
		],
		"name": "ReceivedByDeliveryHub",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "uid",
				"type": "uint256"
			}
		],
		"name": "ReceivedByThirdParty",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "uid",
				"type": "uint256"
			}
		],
		"name": "ShippedByDeliveryHub",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "uid",
				"type": "uint256"
			}
		],
		"name": "ShippedByManufacturer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "uid",
				"type": "uint256"
			}
		],
		"name": "ShippedByThirdParty",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_uid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_barcode",
				"type": "uint256"
			}
		],
		"name": "addBarcode",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_account",
				"type": "address"
			}
		],
		"name": "addCustomerRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_account",
				"type": "address"
			}
		],
		"name": "addDeliveryHubRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_account",
				"type": "address"
			}
		],
		"name": "addManufacturerRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_account",
				"type": "address"
			}
		],
		"name": "addThirdPartyRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "countBarcodes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fetchBarcodeCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fetchProductCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "fetchProductHistoryLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "fetchProductPart1",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "fetchProductPart2",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "enum Structure.State",
				"name": "",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "fetchProductPart3",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "fetchProductState",
		"outputs": [
			{
				"internalType": "enum Structure.State",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "getBarcode",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_barcode",
				"type": "uint256"
			}
		],
		"name": "getIDBarcode",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_account",
				"type": "address"
			}
		],
		"name": "hasCustomerRole",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_account",
				"type": "address"
			}
		],
		"name": "hasDeliveryHubRole",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_account",
				"type": "address"
			}
		],
		"name": "hasManufacturerRole",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_account",
				"type": "address"
			}
		],
		"name": "hasThirdPartyRole",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "manufacturerName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "productPrice",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "productCategory",
				"type": "string"
			}
		],
		"name": "manufactureProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "purchaseByCustomer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_uid",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "thirdPartyLatitude",
				"type": "string"
			}
		],
		"name": "purchaseByThirdParty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "receiveByCustomer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_uid",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "deliveryHubLongitude",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "deliveryHubLatitude",
				"type": "string"
			}
		],
		"name": "receiveByDeliveryHub",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "receiveByThirdParty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "shipByDeliveryHub",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "shipByThirdParty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "shipToThirdParty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "uid",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const connectContract = async () => {
	window.web3 = await new Web3(window.ethereum);
	window.contract = await new window.web3.eth.Contract(ABI, Address);
}

const connectToManufacturer = async () => {
	if (window.ethereum !== "undefined") {
		const accounts = await ethereum.request({ method: "eth_requestAccounts" });
		account = accounts[0];

		document.getElementById("accountArea").innerHTML = `<p style="color:green;" id="accountArea">${account}</p>`;
	}
	window.web3 = await new Web3(window.ethereum);
	window.contract = await new window.web3.eth.Contract(ABI, Address);

	const status = await window.contract.methods.hasManufacturerRole(account).call();
	if (status) {
		const count = await window.contract.methods.fetchProductCount().call();

		// // lặp qua từng sản phẩm và hiển thị thông tin trên bảng HTML
		for (let i = 1; i < count; i++) {

			const result = await contract.methods.fetchProductPart2(i).call();
			let status = result[5];
			let res_status = '';

			switch (status) {
				case '0':
					status = 'status-available';
					res_status = 'available';
					break;

				case '1':
					status = 'status-order';
					res_status = 'ordered';
					break;

				case '2':
					status = 'status-pending';
					res_status = 'shipped';
					break;

				case '3':
					status = 'status-receive';
					res_status = 'received';
					break;

				case '4':
					status = 'status-barcode';
					res_status = 'barcode';
					break;

				default: break;
			}

			const myDate = new Date(result[0] * 1000);
			const row =
				`<tr>
                    <td>${i}</td>
                    <td>${result[1]}</td>
                    <td>${result[4]}</td>
                    <td>${myDate.toLocaleDateString()}</td>
                    <td><p class="${status}">${res_status}</p></td>
                </tr>`;
			document.getElementById('productTable').querySelector('tbody').insertAdjacentHTML('beforeend', row);
		}
	}
	else {
		document.getElementById("accountArea").innerHTML = `<p style="color:red;" id="accountArea">Không phải tài khoản cửa hàng</p>`;
	}
}


const connectToStore = async () => {
	if (window.ethereum !== "undefined") {
		const accounts = await ethereum.request({ method: "eth_requestAccounts" });
		account = accounts[0];

		document.getElementById("accountArea").innerHTML = `<p style="color:green;" id="accountArea">${account}</p>`;
	}
	window.web3 = await new Web3(window.ethereum);
	window.contract = await new window.web3.eth.Contract(ABI, Address);

	const status = await window.contract.methods.hasThirdPartyRole(account).call();
	if (status) {
		const count = await window.contract.methods.fetchProductCount().call();

		// // lặp qua từng sản phẩm và hiển thị thông tin trên bảng HTML
		for (let i = 1; i < count; i++) {

			const fetch_2 = await contract.methods.fetchProductPart2(i).call();
			const fetch_1 = await contract.methods.fetchProductPart1(i).call();
			let status = fetch_2[5];
			let res_status = '';

			switch (status) {
				case '0':
					status = 'status-available';
					res_status = 'available';
					break;

				case '1':
					status = 'status-order';
					res_status = 'ordered';
					break;

				case '2':
					status = 'status-pending';
					res_status = 'shipped';
					break;

				case '3':
					res_status = 'received';
					status = 'status-receive';
					break;

				case '4':
					status = 'status-barcode';
					res_status = 'barcode';
					break;

				default: break;
			}
			const myDate = new Date(fetch_2[0] * 1000);
			const row =
				`<tr>
            <td>${i}</td>
            <td>${fetch_2[1]}</td>
            <td>${fetch_1[4]}</td>
            <td>${fetch_2[4]}</td>
            <td>${myDate.toLocaleDateString()}</td>
            <td><p class="${status}">${res_status}</p></td>
        </tr>`;
			document.getElementById('productTable').querySelector('tbody').insertAdjacentHTML('beforeend', row);
		}
	}
	else {
		document.getElementById("accountArea").innerHTML = `<p style="color:red;" id="accountArea">Không phải tài khoản cửa hàng</p>`;
	}
}



const connected = async () => {
	connectMetamask();
	connectContract();
}