"use client"

import {ColumnDef} from "@tanstack/react-table"
import {ArrowUpDown, MoreHorizontal} from "lucide-react"

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Ads} from "@/types/Ads";
import Link from "next/link";

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

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export const columns: ColumnDef<Ads & { token: string }>[] = [
    {
        accessorKey: "id",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
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
        accessorKey: "advertise",
        enableHiding: false,
        cell: ({row}) => <Link href="/client/advertise" className="bg-brand-500 p-2 text-white rounded-md">Reklama qilish</Link>,
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({row, table}) => {
            const ad = row.original;

            const handleActivate = async () => {
                await fetch(`${baseURL}/ads/activate`, {
                    method: "POST",
                    body: JSON.stringify({
                        is_active: true,
                        id: ad.id
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${ad.token}`
                    }
                }).catch(err => console.error(err));
            }

            const handleDeactivate = async () => {
                await fetch(`${baseURL}/ads/activate`, {
                    method: "POST",
                    body: JSON.stringify({
                        is_active: false,
                        id: ad.id
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${ad.token}`
                    }
                }).catch(err => console.error(err));
            }


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

                        <DropdownMenuItem>Sozlash</DropdownMenuItem>
                        <DropdownMenuItem onClick={handleActivate}>Aktiv qilish</DropdownMenuItem>
                        <DropdownMenuItem onClick={handleDeactivate}>O`chirish</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]