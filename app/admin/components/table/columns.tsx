"use client"

import {ColumnDef} from "@tanstack/react-table"
import {ArrowUpDown} from "lucide-react"

import {Button} from "@/components/ui/button"

export type DataType = {
    no: number,
    id: string,
    obyekt: string,
    area: string,
    customer: string,
    designer: string,
    ruxsatnoma: number,
    art: number,
    kengash: number,
    expertiza: number,
    gach_xabarnoma: number,
    gach_akt: number,

}

export const columns: ColumnDef<DataType>[] = [
    {
        accessorKey: "no",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    №
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div>{row.getValue("no")}</div>,
    },
    {
        accessorKey: "id",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    ID
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div>{row.getValue("id")}</div>,
    },
    {
        accessorKey: "obyekt",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Obyekt nomi
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div>{row.getValue("obyekt")}</div>,
    },
    {
        accessorKey: "area",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Hududi
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div>{row.getValue("area")}</div>,
    },
    {
        accessorKey: "customer",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Buyurtmachi
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div>{row.getValue("customer")}</div>,
    },
    {
        accessorKey: "designer",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Loyihachi
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div>{row.getValue("designer")}</div>,
    },
    {
        accessorKey: "ruxsatnoma",
        header: "Ruxsatnoma",
        cell: ({row}) => <div>{row.getValue("ruxsatnoma")}</div>,
    },
    {
        accessorKey: "art",
        header: "ART",
        cell: ({row}) => <div>{row.getValue("art")}</div>,
    },
    {
        accessorKey: "kengash",
        header: "Kengash",
        cell: ({row}) => <div>{row.getValue("kengash")}</div>,
    },
    {
        accessorKey: "expertiza",
        header: "Ekspertiza",
        cell: ({row}) => <div>{row.getValue("expertiza")}</div>,
    },
    {
        accessorKey: "gach_xabarnoma",
        header: "GACH Xabarnoma",
        cell: ({row}) => <div>{row.getValue("gach_xabarnoma")}</div>,
    },
    {
        accessorKey: "gach_akt",
        header: "GACH AKT vvod",
        cell: ({row}) => <div>{row.getValue("gach_akt")}</div>,
    },

    // {
    //     accessorKey: "email",
    //     header: ({column}) => {
    //         return (
    //             <Button
    //                 variant="ghost"
    //                 onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //             >
    //                 Email
    //                 <ArrowUpDown className="ml-2 h-4 w-4"/>
    //             </Button>
    //         )
    //     },
    //     cell: ({row}) => <div className="lowercase">{row.getValue("email")}</div>,
    // },
    // {
    //     accessorKey: "amount",
    //     header: () => <div className="text-right">Amount</div>,
    //     cell: ({row}) => {
    //         const amount = parseFloat(row.getValue("amount"))
    //
    //         // Format the amount as a dollar amount
    //         const formatted = new Intl.NumberFormat("en-US", {
    //             style: "currency",
    //             currency: "USD",
    //         }).format(amount)
    //
    //         return <div className="text-right font-medium">{formatted}</div>
    //     },
    // },
    // {
    //     id: "actions",
    //     enableHiding: false,
    //     cell: ({row}) => {
    //         const payment = row.original
    //
    //         return (
    //             <DropdownMenu>
    //                 <DropdownMenuTrigger asChild>
    //                     <Button variant="ghost" className="h-8 w-8 p-0">
    //                         <span className="sr-only">Open menu</span>
    //                         <MoreHorizontal className="h-4 w-4"/>
    //                     </Button>
    //                 </DropdownMenuTrigger>
    //                 <DropdownMenuContent align="end">
    //                     <DropdownMenuLabel>Actions</DropdownMenuLabel>
    //                     <DropdownMenuItem
    //                         onClick={() => navigator.clipboard.writeText(payment.id)}
    //                     >
    //                         Copy payment ID
    //                     </DropdownMenuItem>
    //                     <DropdownMenuSeparator/>
    //                     <DropdownMenuItem>View customer</DropdownMenuItem>
    //                     <DropdownMenuItem>View payment details</DropdownMenuItem>
    //                 </DropdownMenuContent>
    //             </DropdownMenu>
    //         )
    //     },
    // },
]