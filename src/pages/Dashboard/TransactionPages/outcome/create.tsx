export default function CreateTransactionOutcomePage () {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Create Transaction Outcome Page</h1>
    </div>
  );
};


// import { useState } from "react";

// import ComponentCard from "../../../../components/common/ComponentCard";
// import DatePicker from "../../../../components/form/date-picker";
// import Input from "../../../../components/form/input/InputField";
// import Label from "../../../../components/form/Label";
// import Select from "../../../../components/form/Select";


// export default function CreateTransactionOutcomePage() {
//   const [isLoading, setIsLoading] = useState(false);

//   const options = [
//     { value: "marketing", label: "Marketing" },
//     { value: "template", label: "Template" },
//     { value: "development", label: "Development" },
//   ];
//   const handleSelectChange = (value: string) => {
//     console.log("Selected value:", value);
//   };
//   const [selectedValues, setSelectedValues] = useState<string[]>([]);
//   const multiOptions = [
//     { value: "1", text: "Option 1", selected: false },
//     { value: "2", text: "Option 2", selected: false },
//     { value: "3", text: "Option 3", selected: false },
//     { value: "4", text: "Option 4", selected: false },
//     { value: "5", text: "Option 5", selected: false },
//   ];

//   return (
//     <>
//       <ComponentCard title="Create Outcome Transaction" className="">
//         <form className="flex flex-col gap-4">
//           <div>
//             <Label htmlFor="transactionName">Nama transaksi</Label>
//             <Input
//               id="transactionName"
//               type="text"
//               placeholder="Masukan nama transaksi"
//             />
//           </div>

//           <div>
//             <Label htmlFor="input">Nomimal</Label>
//             <Input
//               id="amount"
//               type="number"
//               placeholder="Masukan jumlah uang"
//             />
//           </div>

//           <div>
//             <Label>Pilih Castegory</Label>
//             <Select
//               options={options}
//               placeholder="Pilih opsi kategori"
//               onChange={handleSelectChange}
//               className="dark:bg-dark-900"
//             />
//           </div>

//           <div>
//             <DatePicker
//               id="date-picker"
//               label="Tanggal"
//               placeholder="Pilih tanggal"
//               onChange={(dates, currentDateString) => {
//                 // Handle your logic
//                 console.log({ dates, currentDateString });
//               }}
//             />
//           </div>

//           <div className="mb-4 flex justify-end">
//             <button
//               type="submit"
//               className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//             >
//               Tambah Transaksi
//             </button>
//           </div>

//         </form>
//       </ComponentCard>
//     </>
//   );
// };