import styled from 'styled-components';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';


export const Logo = styled(LogoSvg)`
  /* Logo/white/next */


  width: 120.24px;
  height: 105.74px;


  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

export const Container = styled.div `
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 25px 150px;
  
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 1;

  /* Font styling */
  font-family: montserrat-bold-700;
  font-size: 16px;
  color: white;
  
  
`

export const LeftMenu = styled.div`
  /* Frame 1 */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px;
  margin-right: auto;
  gap: 35px;

  /*width: 306px;*/
  /*height: 20px;*/


  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const RightMenu = styled.div`
  /* Frame 1 */


  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  margin-left: auto;

  gap: 35px;

  /*width: 292px;*/
  /*height: 20px;*/


  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`

export const Header = styled.div`
  /* Frame 2 */


  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  position: relative;
  /*width: 1409px;*/
  /*height: 205.74px;*/

  background: #D9D9D9;
`

