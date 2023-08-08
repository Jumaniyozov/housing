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
import {Category} from "@/types/Categories";


export const columns: ColumnDef<Category>[] = [
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
        accessorKey: "name",
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
        cell: ({row}) => <div>{row.getValue("name")}</div>,
    },
    {
        accessorKey: "is_rent",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Arenda turimi
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div>{row.getValue("is_rent") ? "Ha" : "Yo`q"}</div>,
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