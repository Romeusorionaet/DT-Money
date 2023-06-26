import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./SearchForm";
import { PriceHeighLight, TransactionsContainer, TransactionsTable } from './styles'

export function Transactions() {
    return(
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />

                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHeighLight variant='income'>
                                    <td>R$ 12.000,00</td>
                                </PriceHeighLight>
                            </td>
                            <td>Venda</td>
                            <td>12/04/2022</td>
                        </tr>

                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td>
                                <PriceHeighLight variant='outcome'>
                                    <td>- R$ 59.00</td>
                                </PriceHeighLight>
                            </td>
                            <td>Alimentação</td>
                            <td>10/04/2022</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}