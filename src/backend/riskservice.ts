export interface Risk {
  id: number;
  title: string;
  owner: number;
  summary?: string;
  weakness: string;
  damage?: string;
}

let sampleRisks: Array<Risk> =
[
 {id: 1, title: 'Administrator completely unmotivated', owner: 4,
   weakness: 'It seems that the administrator doesn\'t seem to like his job at all.\n\n' +
   'This may lead to him making mistakes.'},
 {id: 2, title: 'Datacenter explosion imminent', owner: 15,
   weakness: 'A comet is heading to the datacenter.'},
 {id: 3, title: 'Theft or corporate secrets by malicious employees', owner: 9,
   weakness: 'Not all emploiyees are trustworthy'},
 {id: 4, title: 'A very complicated technical risk', owner: 22,
   summary: 'This is an example of a quite technical risk.',
   weakness: 'The server HS201301 is configured to exchange data with the internet using ' +
   'the MAOSID protocol. The data sometimes contains control instructions for the production ' +
   'machines. While the MAOSID protocol is considered secure, it does not appear to be suited ' +
   'for control instructions in this specific encoded form, because \n\n' +
   '* The input data partially comes from an untrusted source. This is mitigated by inspecting ' +
   'it automatically and doing various sanity checks.\n' +
   '* Control instruction are specific to the machine that they are made for, so they cannot ' +
   'generally be inspected to find integrity errors.\n' +
   '* Although no specific attack vector is know, the possibility cannot be precluded.\n' +
   '* Malicious code parts may be ofuscated sufficiently to make finding them very difficult.'}
]

export class RiskService {
  get(id: number): Promise<Risk> {
    return new Promise(resolve => {
      setTimeout(() => {
        // tslint:disable-next-line:triple-equals
        resolve(sampleRisks.find(x => x.id == id));
       }, 200)
      }
    )
  }
}
