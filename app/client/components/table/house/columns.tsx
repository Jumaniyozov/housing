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

export type HouseDataType = {
    no: number,
    id: string,
    adress: string,
    area: string,
    areaSquare: number
}

export const columns: ColumnDef<HouseDataType>[] = [
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
        accessorKey: "adress",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Adress
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div>{row.getValue("adress")}</div>,
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
        accessorKey: "areaSquare",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Maydon
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div>{row.getValue("areaSquare") + "m.kv."}</div>,
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