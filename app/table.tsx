import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text
} from '@tremor/react';
  
  interface guestbook {
    Id: number;
    Email: string;
    Body: string;
    Created_By: string;
  }
  
  export default function UsersTable({ guestbook }: { guestbook: guestbook[] }) {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Username</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {guestbook.map((user) => (
            <TableRow key={user.Id}>
              <TableCell>{user.Email}</TableCell>
              <TableCell>
                <Text>{user.Body}</Text>
              </TableCell>
              <TableCell>
                <Text>{user.Created_By}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }