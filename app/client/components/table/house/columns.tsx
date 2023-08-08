"use client"

import {ColumnDef} from "@tanstack/react-table"
import {ArrowUpDown, MoreHorizontal} from "lucide-react"

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Ads} from "@/types/Ads";

// export type HouseDataType = {
//     ID: string;
//     category: string;
//     title: string;
//     sum: string;
//     currency: string;
//     room_quantity: string;
//     auto_prolong: boolean;
//     is_active: boolean;
//     created_at: string;
//     user_id: string;
// }

export const columns: ColumnDef<Ads>[] = [
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
        accessorKey: "category",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Kategoriya
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div>{row.getValue("category")}</div>,
    },
    {
        accessorKey: "title",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nomi
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div>{row.getValue("title")}</div>,
    },
    {
        accessorKey: "sum",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Summa
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div>{row.getValue("sum")}</div>,
    },
    {
        accessorKey: "currency",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Valyuta
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div>{row.getValue("currency")}</div>,
    },
    {
        accessorKey: "room_quantity",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Xonalar soni
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div>{row.getValue("room_quantity")}</div>,
    },
    {
        accessorKey: "user_id",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Foydalanuvchi
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div>{row.getValue("user_id")}</div>,
    },
    {
        accessorKey: "is_active",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Aktivmi
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div>{row.getValue("is_active") ? "Ha" : "Yo'q"}</div>,
    },
    {
        accessorKey: "created_at",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Yaratilgan sana
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div>{row.getValue("created_at")}</div>,
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({row}) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="font-sansNarrow">
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="font-sansNarrow">
                        <DropdownMenuLabel>Sozlamalar</DropdownMenuLabel>
                        {/*<DropdownMenuItem*/}
                        {/*    onClick={() => navigator.clipboard.writeText(payment.id)}*/}
                        {/*>*/}
                        {/*    Copy payment ID*/}
                        {/*</DropdownMenuItem>*/}
                        {/*<DropdownMenuSeparator/>*/}
                        <DropdownMenuItem>Sozlash</DropdownMenuItem>
                        <DropdownMenuItem>O`chirish</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]